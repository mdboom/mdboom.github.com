Profiling WebAssembly
#####################

:date: 2018-04-11
:modified: 2018-04-11
:category: mozilla
:tags: python, data science
:slug: profiling-webassembly
:authors: Michael Droettboom
:summary: Tips for profiling WebAssembly

**Summary:** Tips for profiling WebAssembly

I couldn't find a comprehensive guide to profiling WebAssembly, so I thought I'd
share my own limited experience here. In my `last post
</blog/2018/04/04/python-in-the-browser/>`__, I talked about benchmarking a
WebAssembly port of the scientific Python stack. I knew which benchmarks were
doing better than others and had some theories about why, but since I didn't yet
know how to profile WebAssembly, I couldn't really answer that with any
certainty.

It turns out that profiling WebAssembly is quite easy.

Rebuilding with the --profiling flag
------------------------------------

The first step is to rebuild the application with the ``--profiling`` flag
passed to both the compiler and the linker for every object. This makes sure
that all of the information necessary for profiling is available in the output
and makes the code more readable. The typical way to do this would be to set
``CFLAGS`` and ``LDFLAGS`` and let the ``./configure`` script for your project
pick those up. In the case of ``pyodide``, the Python cross-compiling setup
makes that tricky, or at least I couldn't figure it out in a short amount of
time. Fortunately, ``emscripten`` provides a handy backdoor to just force this
on everything: the ``EMCC_CFLAGS`` environment variable. Therefore, to make a
profiling-friendly build of ``pyodide``:

.. code-block:: sh

    make clean
    EMCC_CFLAGS=--profiling make

Setting start and stop points for profiling
-------------------------------------------

You generally don't want to profile an entire run, which would include
initialization and other things. It turns out there's a handy Javascript API to
turn the profiler on and off.

- ``console.profile()`` turns the profiler on.
- ``console.profileEnd()`` turns the profiler off.

If you wanted to call these from C/C++, you could use the ``EM_ASM`` macro, which
allows you to insert literal Javascript into the C application:

.. code-block:: c

    EM_ASM(
        console.profile();
    );

In my case, I wanted to turn the profiler on and off from Python, so I can do:

.. code-block:: Python

    from js import console
    console.profile()

Profiling
---------

The actual profiling is performed within the development tools of your browser.
When you load an ``.html`` file that runs the WebAssembly built and instrumented
as above, it will record a set of profiling data available from the
**Performance** tab.

I'll refer you to the `Performance Tools documentation
<https://developer.mozilla.org/en-US/docs/Tools/Performance>`__ for more
information. Suffice it to say that profiling WebAssembly is almost exactly like
profiling vanilla Javascript in the browser.

Case study
----------

For ``pyodide``, I created a profiling build to look into the `julia benchmark
<https://github.com/iodide-project/pyodide/blob/master/benchmark/benchmarks/julia.py>`__
that I knew was performing poorly. Right away, I noticed from the Call Tree that
50% of the time was spent in this function:

.. code-block:: Javascript

    for (var named in NAMED_GLOBALS) {
        (function(named) {
            Module['g$_' + named] = function() {
                return Module['_' + named] // <- 50% of runtime HERE
            };
        })(named);
    }

This code is actually part of the boilerplate that emscripten emits. It helps
dynamically loaded modules (such as Numpy in my case) access symbols in the main
module. Since these symbols don't change at runtime, we don't actually need to
do the dictionary lookup for ``Module['_' + named]`` every time, we can cache
(memoize) it at startup and then just use that:

.. code-block:: Javascript

    for (var named in NAMED_GLOBALS) {
        (function(named) {
            var func = Module['_' + named];
            Module['g$_' + named] = function() {
                return func;
            };
        })(named);
    }

This 2-line change to emscripten resulted in significant speedups in my
``pyodide`` benchmarks across the board.

.. image:: /images/benchmark_improvement.svg
    :height: 800
    :width: 800
    :alt: description

Here, the *x*-axis is the number of times slower that WebAssembly runs vs. native
code. The grey bars are the timings before this change, and blue bars are the
timings after this change.

More details about this changes are in the `pull request
<https://github.com/kripken/emscripten/pull/6437>`__.
