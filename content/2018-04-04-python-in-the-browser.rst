Scientific Python in the Browser
################################

:date: 2018-04-04
:modified: 2018-04-04
:category: mozilla
:tags: python, data science
:slug: python-in-the-browser
:authors: Michael Droettboom
:summary: An early report on getting the scientific Python stack compiled to WebAssembly.

**Summary:** An early report on getting the scientific Python stack compiled to WebAssembly.

Data Science in the Browser
===========================

Shortly after starting at Mozilla in January, I became aware of Hamilton Ulmer
and Brendan Colloran's `Iodide <https://github.com/iodide-project/iodide>`__
project, an experiment to build a data science notebook based on web
technologies. Unlike Jupyter notebooks, the computation happens in the browser,
with direct access to Web API technologies like the DOM. Sharing a notebook is
as simple as passing around a single HTML file, since there's no server side to
worry about. It's not out to replace Jupyter notebooks, but rather to exist in a
different design tradeoff space that makes it more suitable the sharing and
collaboration.

Since it targets the browser, the programming language of Iodide is, of course,
Javascript. While there are a number of libraries for doing data science in
Javascript, such as `numjs <https://github.com/nicolaspanel/numjs>`__ and `scijs
<http://scijs.net/packages/>`__, they aren't as widely used or as battle-tested
as the scientific Python or R ecosystems. Nonetheless, I think "data science in
Javascript" is an interesting area to explore, particularly since Javascript has
some of the best JIT compilers of any dynamic language. This advantage allows
writing both high-level orchestration and low-level numeric code in the same
language, side-stepping the notorious "two language problem" in scientific
Python. (In Python land, most of the core scientific libraries have significant
chunks of code in lower level languages such as C, FORTRAN or `Cython
<http://cython.org/>`__ for performance reasons.) Combining Javascript's great
compiler technology, and perhaps adding a smattering of transpilation to fix
some syntactic issues, is really promising, and Iodide as a project is
exploring that space.

Nonetheless, we received frequent feedback that Iodide "looks really cool, but I
wish I could use the Python (or R) tools I'm familiar with." I understood in
theory that it should be possible to compile the Python interpreter into
`WebAssembly <http://webassembly.org/>`__ in order to run it in the browser.
There are already a few projects that do this: (`cpython-emscripten
<https://github.com/dgym/cpython-emscripten>`__, `micropython javascript support
<https://github.com/micropython/micropython/pull/3575>`__, `pypyjs
<http://pypyjs.org/>`__). Unfortunately, I couldn't find a project that included
a practical scientific Python stack including `Numpy <http://numpy.org>`__ and
friends. I was concerned about the amount of effort it would take to build such
a thing, and also whether the result would be performant enough to be useful. In
February, we had a conversation with some folks who work on WebAssembly tooling
at Mozilla, and they were pretty bullish that it wouldn't be too hard. Based on
their optimism, I gave it a shot, and starting with dgym's `cpython-emscripten
<https://github.com/dgym/cpython-emscripten>`__ as a basis, I had the basic
parts of a Python interpreter working in WebAssembly in a couple of days. Of
course, going from that to a working Numpy took much longer, but thanks to some
help from Alon Zakai and others, Numpy is working, too. With that done, it has
been much easier getting other libraries higher up the stack to work, including
preliminary support for Pandas.

Tight integration
-----------------

One thing that sets this implementation apart from other Python-in-the-browser
projects I've come across is the ability to easily pass and share objects
between Python and Javascript.

The basic Python data types (None, bool, int, float, str, bytes, list and dict)
are transparently converted to and from their Javascript equivalents. Other
types, including Numpy arrays, are wrapped in a proxy that allows Javascript to
call their methods and access their items and attributes. Vice versa, Javascript
objects are wrapped in a Python proxy. These proxies allow objects to be
shared on both sides of the language barrier without copying,
which is particularly important for large Numpy arrays.

Say, for example, you had a value in Javascript:

.. code:: javascript

    // javascript
    secret = "Wklv#lv#olnh#pdjlf$"

You could use it from Python by using the ``from js import ...`` syntax:

.. code:: python

    # python
    from js import secret

    decoded = ''.join(chr(ord(x) - 3) for x in secret)

And then send data back to the Javascript side using ``pyodide.pyimport``:

.. code:: javascript

    // javascript
    var decoded = pyodide.pyimport("decoded")

One of the coolest side effects of this design is that Python has complete
access to the Web API, so it can manipulate the DOM, use HTML Canvas, access
webcams or audio and all the other cool things you can do from Javascript in a
browser.

For example, changing the browser tab's title is as simple as importing
``window`` and setting an attribute:

.. code:: python

    from js import window
    window.title = "My mind is blown"

What works
----------

Most of the Python standard library works. The most notable exceptions are:

- ``subprocess``: since the browser isn't an OS, it can't spawn new processes.

- ``socket``: access to raw network sockets would break the browser security
  model. There are a lot of networking-related things in the standard library
  built on ``socket`` that therefore also don't work.

- All of the browser sandboxing still applies, so you can't access the local
  filesystem. However, by calling through Javascript, you do have access to
  ``XMLHttpRequest`` and browser local storage. Eventually, Python wrappers
  around this functionality `should be written
  <https://github.com/iodide-project/pyodide/issues/19>`__ to make those
  operations feel more like they do in native Python.

Within Numpy, all of the core functionality works, but there's no support for
``long double`` (but those are pretty niche). There are still some low-level
compiler bugs that prevent the FFT stuff from compiling, but that should
eventually resolve.

How fast is it?
---------------

To answer this question, I reached for a few existing Python and Numpy benchmarks:

- The venerable `pystone
  <https://svn.python.org/projects/python/trunk/Lib/test/pystone.py>`__,
  which ships with CPython.

- Serge Guelton's set of `numpy benchmarks
  <https://github.com/serge-sans-paille/numpy-benchmarks/>`__.

These benchmarks probably fall into the trap of being a little too "synthetic".
I would have preferred to also use the `Python Performance Benchmark Suite
<http://pyperformance.readthedocs.io/index.html>`__, which aims to be a little
closer to "real world", but it has a significant number of dependencies and
would need to be adapted to work on a platform without ``subprocess`` before it
could be used in this context. Nonetheless, I think these benchmarks offer a
useful approximation for now.

The `benchmarks
<https://github.com/iodide-project/pyodide/tree/master/benchmark/benchmarks/>`__
were run on the same machine in the native CPython implementation and in Firefox
Nightly using selenium. The following figure shows how many times slower the
WebAssembly implementation is.

.. image:: /images/pyodide-benchmarks.svg
    :height: 800
    :width: 800
    :alt: description

The results are interesting. For benchmarks that spend most of their time in
Numpy routines, such as `harris
<https://github.com/iodide-project/pyodide/tree/master/benchmark/benchmarks/harris.py>`__
or `rosen
<https://github.com/iodide-project/pyodide/tree/master/benchmark/benchmarks/rosen.py>`__,
runtime is at par with the native-compiled Python. When WebAssembly rocks, it
really, really rocks. Unfortunately, for other benchmarks that spend a lot of
time looping or making function calls in Python, runtimes can be as much as 35
times slower. I have an unsubstantiated hunch that this is due to the use of
Emscripten's `EMULATE_FUNCTION_POINTER_CASTS
<https://kripken.github.io/emscripten-site/docs/porting/guidelines/function_pointer_issues.html#asm-pointer-casts>`__
option which is required to make all of the function pointer calls that CPython
does work correctly.

Future directions
-----------------

I'd love to see improvements to the toolchain that close the performance gap. At
this point, I don't personally know enough to anticipate how much work is
involved.

Another current limitation is that all of the packages you anticipate you might
need must be compiled and wrapped into a single large data file that is
downloaded in its entirety to your browser before anything can start. It would
be great to modularize that, so that packages are downloaded on demand. Related
to that, it would also be helpful to modularize the build system so that
individual packages can be added more independently. `Conda build
<https://github.com/conda/conda-build>`__ could potentially serve as a basis for
that.

Check it out
------------

The easiest way to play with this is to visit the `example Pyodide notebook
<https://iodide-project.github.io/iodide-examples/output-handling.html>`__.
(Note that this only works on Firefox right now. Chrome support is `pending
<https://github.com/iodide-project/pyodide/issues/17>`__).

You can also get involved at `pyodide github repository
<https://github.com/iodide-project/pyodide/>`__. Note that while Pyodide grew
out of the needs of Iodide, there's nothing Iodide-specific about it, and it
should be useful in other contexts where you want to embed a scientific Python
stack in the browser. I'm pretty new to WebAssembly and I'd love any help,
advice or comments to make this better.
