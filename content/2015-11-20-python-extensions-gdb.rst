Debugging Python C/C++ extensions in gdb
########################################

:slug: gdb-python-extensions
:date: 2015-11-20 16:16
:category: python
:tags: python debugging gdb

``gdb`` has fantastic support for debugging Python/C extensions.  It
understands how to print the contents of `PyObject *` variables using
their Python-side representation, and can even print Python
tracebacks.

These features are described `elsewhere
<https://fedoraproject.org/wiki/Features/EasierPythonDebugging>`__.  I
suggest visiting that link to see why this is so cool.  This blog
posting is just about how to get those features set up everywhere for
any Python you may have on your system, on any Linux and Mac OS-X, and
some additional tips to help make debugging Python/C extensions in
``gdb`` more effective.

Install the GDB Python-debugging extension
------------------------------------------

Since version 7.0, ``gdb`` includes an embedded Python interpreter
that can be used to write ``gdb`` extensions, changing how variables
and backtraces are displayed.  ``CPython`` includes one such extension
in its source tree that is useful for debugging Python itself and
Python/C extensions, in ``Tools/gdb/libpython.py``.

.. note::

   First make sure you have a working copy of ``gdb``.  If you're on a
   Mac, this process is fairly involved because ``gdb`` must be
   codesigned.  These `instructions
   <http://ntraft.com/installing-gdb-on-os-x-mavericks/>`__ may be
   useful.

The usual way for this extension to be used is to install it alongside
the ``libpythonX.Y.so`` shared object with the special name
``libpythonX.Y.so-gdb.py``.  When ``gdb`` loads ``libpython`` it
should then automatically load the extension and start using the
special display hooks for Python.  There are a couple of problems with
this approach: The extension needs to be installed alongside each
``libpython.so`` you want to debug, and if you're like me, you
probably have a bunch of different Python versions installed using
`pyenv <http://github.com/yyuu/pyenv>`__, `anaconda
<http://www.continuum.io/downloads>`__, `homebrew <http://brew.sh/>`__
and the like.  Most of these tools don't install the ``gdb`` extension
-- the only installation method I know of that actually does this is
Fedora Linux, but even there it only works with the system Python.
Even if we did install this extension alongside each ``libpython.so``,
``gdb`` will only autoload extensions from an explicit whitelist.

To get around this, we can bypass ``gdb``'s automatic extension
loading mechanism and have ``libpython.py`` loaded for any
``libpython.so`` you may want to debug.

The first thing to do is to obtain the correct version of
``libpython.py`` that matches the embedded Python interpreter inside
of ``gdb``.  This version of Python has **absolutely nothing to do
with** the version of Python you want to debug -- it is merely the
embedded interpreter that runs ``gdb`` extensions.  To see which
version of Python is embedded inside your ``gdb``, do the following::

  > gdb
  GNU gdb (GDB) Fedora 7.10-29.fc23
  Copyright (C) 2015 Free Software Foundation, Inc.
  License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
  ...
  (gdb) python
  >import sys
  >print(sys.version_info)
  >end
  sys.version_info(major=3, minor=4, micro=3, releaselevel='final', serial=0)
  (gdb)

In this case, my embedded Python interpreter is version 3.4.  When I
installed ``gdb`` through ``homebrew`` on my Mac, it had version 2.7.
In both cases, I was able to use this to debug any version of Python.

Download the version of ``libpython.py`` corresponding to the embedded
Python interpreter, and save it somewhere in your home directory.  (I
put it in ``~/.config/gdb/libpython.py``, but you may want to put it
somewhere else depending on how you organize your configuration
files).

- Python 2.7: `libpython.py <https://hg.python.org/cpython/file/raw/2.7/Tools/gdb/libpython.py>`__
- Python 3.3: `libpython.py <https://hg.python.org/cpython/file/raw/3.3/Tools/gdb/libpython.py>`__
- Python 3.4: `libpython.py <https://hg.python.org/cpython/file/raw/3.4/Tools/gdb/libpython.py>`__
- Python 3.5: `libpython.py <https://hg.python.org/cpython/file/raw/3.5/Tools/gdb/libpython.py>`__

Then we'll set up ``~/.gdbinit`` to load this extension by adding the
following::

  python
  import gdb
  import sys
  sys.path.insert(0, os.path.expanduser("~/.config/gdb")

  def setup_python(event):
      import libpython
  gdb.events.new_objfile.connect(setup_python)
  end

You will need to update the ``~/.config/gdb`` directory to be the same
directory where you saved ``libpython.py``.

Now you should get nice Python-aware debugging features no matter
which Python you are debugging!

Rebuild your extensions without optimization
--------------------------------------------

If, when debugging, you are seeing missing stack frames or variables
being displayed as "value optimized out", you'll probably want to
recompile your extension with optimizations turned off.  In the source
directory for your project::

  # Completely clear the build directory for good measure
  > rm -rf build
  > CFLAGS="-O0 -g" CXXFLAGS="-O0 -g" python setup.py install

Use a debug build of Python
---------------------------

I've found the above steps to be sufficient for diagnosing most
problems with my own C and C++ Python extensions.  However, in the
rare case where there is some tight interaction between the Python
interpreter and the extension that is causing a problem, it can be
helpful to run the extension in a `debug build of Python
<https://docs.python.org/devguide/setup.html#compiling-for-debugging>`__.

`pyenv <http://github.com/yyuu/pyenv>`__ provides a convenient way to
build a debug Python.  Just install the version with the ``-debug``
suffix::

  > pyenv install 3.5.0-debug

Unfortunately, extensions built for a regular Python are incompatible
with a debug Python, so your extensions (and its entire stack of
dependencies) will need to be rebuilt, which is why I only suggest
this as a last resort.
