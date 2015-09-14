Client-side Rendering in Matplotlib, Part II: The language blender
##################################################################

:slug: client-side-rendering-in-matplotlib
:date: 2012-08-07 13:56
:category: matplotlib
:tags: matplotlib

.. note::

   EDIT 2012-08-08: Added benchmarks in Firefox in addition to Chrome

In the `last post
<http://mdboom.github.com/blog/2012/08/06/matplotlib-client-side/>`_,
I outlined some of the architectural difficulties bringing
matplotlib's interactivity to the browser.  In short, there's a big
chunk of code that lies between building the tree of artists and
rendering them to the screen that needs to run either in the Python
interpreter, as it does now, or inside of the web browser to support
interactive web applications.  It would be great to avoid having two
code bases, one in Python and one in Javascript, that would need to be
kept in sync.  Writing code for both contexts from a single code base
may turn out to be a pipe dream, but bear with me as I explore tools
that might help.

Also, when trying to grok the discussion here and understanding the
architectural challenges of matplotlib, it may be helpful to read the
matplotlib chapter by John Hunter and yours truly from `Architecture
of Open Source Applications, Volume II
<http://www.aosabook.org/en/index.html>`_.

Tools
=====

There are a few interesting projects that help bridge the gap between
Python and Javascript.

PyJs
----

`PyJs <http://www.pyjs.org>`_ (formerly called Pyjamas) is a
Python-to-Javascript converter.  It also includes an environment much
like Google Web Toolkits for developing rich client-side applications
in Python, but those features are probably not useful here.

Skulpt
------

`Skulpt <http://www.skulpt.org>`_ is a Python interpreter written in
Javascript.  It can compile and run Python code entirely within the
web browser.  In terms of language features, it doesn't seem as mature
as PyJs, but the fact that it has no dependencies other than a couple
of Javascript files may be an advantage in terms of deployment.  An
obvious shortcoming of both Skulpt and PyJs is the lack of support for
Numpy -- none of the existing matplotlib Python code, which depends so
heavily on Numpy, would work in that context.

PyV8
----

Unlike the other two, which allow Python to run in the browser, `PyV8
<http://code.google.com/p/pyv8/>`_ allows Javascript to run inside of
the Python interpreter.  It is a wrapper around Google's open source
V8 Javascript engine and allows sharing objects between Python and
Javascript somewhat transparently.  If the drawing code were to be
rewritten in Javascript, it could then, theoretically, be used both
from Python on the desktop and inside the web browser.

Playing around
==============

As a first pass playing with these tools, I've created a new project
on github `py-js-blending-experiments
<https://github.com/mdboom/py-js-blending-experiments>`_.  I've
started by writing a very simple benchmark that does a simple 2D
affine transformation, in pure Python, Python with Numpy, Javascript
and C.  This test, while a real-world bottleneck from the real-world
matplotlib, is probably too simple to read too much into the results.
A real test would involve classes with complex interactions between
them, to show how the same flexible system of transformations,
tickers, formatters etc. would work, and would take into account the
penalty of stepping over the gap between Python and Javascript.  But
all that will have to wait for a future blog post.

The benchmarks
==============

The benchmarks compare a number of different possible approaches.

- **Pure Python**: This is just a simple pure Python implementation.
  `transform.py
  <https://raw.github.com/mdboom/py-js-blending-experiments/master/transform.py>`_

- **Pure Javascript**: A hand-written JavaScript implementation.
  `transform.js
  <https://raw.github.com/mdboom/py-js-blending-experiments/master/transform.js>`_

- **Numpy**: An implementation using vectorized Numpy operations.
  `transform_numpy.py
  <https://raw.github.com/mdboom/py-js-blending-experiments/master/transform_numpy.py>`_

- **C extension**: A hand-written C extension.
  `transform.c
  <https://raw.github.com/mdboom/py-js-blending-experiments/master/transform.c>`_

- **Skulpt**: Taking the pure Python implementation above, but running through
  Skulpt to get it to run inside of the browser.

- **PyJs**: Compiling the pure Python implementation above to
  Javascipt using PyJs, and then running the result in the browser.

- **PyV8**: Running the hand-written Javascript implementation above
  inside of PyV8.

Results
-------

The following results are on a quad-core Intel Core i5-2520M CPU @
2.50GHz running Fedora Linux 17.  Python 2.7.3, Numpy 1.6.1, Google
Chrome 21.0.1180.57 beta and Firefox 14.0.1 were used.  The benchmark
is performing a 2D affine transformation on 128,000 points.  Note that
the timings in the web browser are quite variable.  I've included the
average and independent results of 5 runs.

::

   =========================== ================== ==================================
   Benchmark                   avg. time (in ms)  times
   =========================== ================== ==================================
   Pure Python                 94                 95, 96, 93, 96, 92
   Pure Javascript Chrome      40                 41, 29, 59, 33, 42
   Pure Javascript Firefox     15                 8, 7, 25, 20, 16
   Numpy                       6                  7, 6, 6, 6, 6
   C                           2                  2, 2, 2, 2, 2
   Skulpt Chrome               686                700, 691, 676, 691, 676
   Skulpt Firefox              1052               1027, 1052, 1062, 1060, 1061
   PyJs Chrome                 2197               2156, 2218, 2176, 2187, 2251
   PyJs Firefox                658                644, 687, 630, 680, 674
   PyV8                        38                 38, 38, 38, 37, 37
   =========================== ================== ==================================

Conclusion
==========

So what can we conclude?  Remember what I said about not reading too
much into these results?  Well, I'm going to do it anyway with an
enormous caveat.

There is considerable overhead when trying to shoehorn Python into the
browser (comparing Skulpt and PyJs to Pure Javascript).  I personally
am surprised by how much more successful the Python interpreter
approach is vs. the Python to Javascript conversion approach, though
that may be due to the relative incompleteness of Skulpt.  (*EDIT:
Though the Firefox results tell the opposite story*). It's pretty
clear where the overhead of PyJs comes from.  The line::

     X = a*x + c*y + e

converts to::

     X = $p['__op_add']($add3=$p['__op_add']($add1=(typeof ($mul1=a)==typeof ($mul2=x) && typeof $mul1=='number'?
         $mul1*$mul2:
	 $p['op_mul']($mul1,$mul2)),$add2=(typeof ($mul3=c)==typeof ($mul4=y) && typeof $mul3=='number'?
	 $mul3*$mul4:
	 $p['op_mul']($mul3,$mul4))),$add4=e);

You can see how basic numeric operators in Python don't translate
directly to those in Javascript, so it's forced to do something a
whole lot more dynamic, including typechecking within every loop
iteration.  I pity the fool Javascript engine that tries to optimize
that.

Not surprisingly, the PyV8 engine performs comparably to the V8 engine
embedded in Google Chrome, which also beats pure Python by at least a
factor of 2.  We could do rather well implementing this core in
Javascript.

Numpy and C extensions, of course, beat everything handily for this
very numerically-biased benchmark.

Where does that leave us?  Who knows...  Interesting ride, though.
Stay tuned and leave comments...  There's more to hack away at.
