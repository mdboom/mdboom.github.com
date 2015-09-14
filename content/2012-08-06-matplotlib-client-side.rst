Client-side rendering in matplotlib, Part I: Defining the problem
#################################################################

:slug: matplotlib-client-side
:date: 2012-08-06 16:16
:category: matplotlib
:tags: matplotlib

One of the big challenges that matplotlib faces as it enters its
second decade is moving from a desktop app to the web browser
client/server paradigm.  This need has been known for a few years at
least: SAGE and the IPython notebook are rich web clients and powerful
ways to interact with Python, however, their plotting is still
necessarily limited by matplotlib's design to rendering a static
image.  John Hunter concluded his keynote at SciPy 2012 arguing that
this was the single biggest challenge to matplotlib's relevance today.

.. raw:: html

  {% video http://veyepar.nextdayvideo.com/site_media/static/veyepar//enthought/scipy_2012/mp4/matplotlib_lessons_middle_age.mp4 %}

The performance of JavaScript and graphics in web browsers is no
longer an issue.  At least on a gut level, it appears to compete well
with anything matplotlib is able to do with its Python bindings to
traditional desktop GUI toolkits.  See `d3 <http://d3js.org/>`_ and
`webgl-surface-plot <http://code.google.com/p/webgl-surface-plot/>`_
for some examples of great, high-performance plotting coming out of
the JavaScript community.  The problem with those libraries is they
don't integrate well with Python data processing, they are harder to
modify and extend and, let's be honest, just generally lack the
Pythonic features that have made matplotlib so popular.

When trying to determine how to pull matplotlib kicking and screaming
into this Brave New World, let's assume that the network bottleneck
between the server (e.g. an IPython kernel) and the client (i.e. the
web browser) is too high to simply send images over repeatedly.  It
would be awfully nice, if we're going to do all this work anyway, to
allow for interacting with a server that may be over a slow and
high-latency internet connection on the other side of the globe.  The
only way to make interactivity bearable in that scenario is to put
some actual plotting smarts into the client.

For the purposes of this discussion, we should define what
interactivity means.  I think it basically amounts to:

  - data cursor (i.e. getting the current position of the mouse in
    data coordinates)

  - panning and zooming

  - adjusting the edges of the axes within the figure

Other interactive features, such as a "back" button or "apply tight
layout" button have an "activate and return" interaction, rather than
real time interaction, so can probably be handled with a round-trip to
the server and thus aren't really considered here.

It's well known that matplotlib has a number of backends that handle
drawing to specific GUI frameworks or file formats.  The matplotlib
"core" understands how to build and generate plots, and then sends
low-level drawing commands to the currently selected backend.  In
order to reduce code duplication, there is a solid wall between the
core and the backends, and we're constantly trying to minimize the
amount of code required to write a backend.  The advantage of this is
not just to reduce the number of lines of code, but to ensure
consistency between the backends, so that when you render a streamplot
with hatching and custom markers to a PDF file, it looks the same as
when you render it to an SVG.

So why can't we just add a new "webbrowser" backend?  The problem is
that the backends are too low-level.  They know where the shapes and
the text are, but they know nothing how they relate to one another,
how the data scales from its native data coordinates to the
coordinates of the screen, and how to best add ticks and other
annotations to the graph.  All of that information would be required
for any sort of interactivity.

To even begin to tackle this, we need to move from the current two-way
split of the plotting core and rendering backends to a three-way split
into the phases of outputting a plot:

  1) **Build**: This phase is where the various Artist objects that
     make up the plot are created and related to one another.  This is
     where most of the domain-specific code about particular types of
     plots lives.

  2) **Drawing**: Given those Artists and view limits for the axes,
     figures out how to scale them, and where to place the ticks,
     labels and other pieces of text.  This phase also includes
     decimating or downscaling the data for display, since how to do
     so is dependent on the limits.  Newer features such as "tight
     limits" also need to happen during this phase.

  3) **Rendering**: Converts a series of simple commands from the drawing
     phase into the native commands understood by a particular GUI
     framework or file format.

In normal interactive use, the **Build** phase happens once, but the
**Drawing** and **Rendering** phases happen in a continuous loop as
the figure is panned, zoomed and resized.

The **Drawing** phase comprises a great deal of Python and C++ code
[1]_, much of it at the heart of what matplotlib is.  The big pieces
are:

  - Ticking (i.e. deciding where the numeric values and gridlines
    should go) is a surprisingly involved task, and matplotlib's
    ticking is very flexible, supporting many different scales (such
    as log scale) and formats (controlling the precision of the
    values, for example).  Because of this, the **Drawing** phase
    is dependent on matplotlib's transformation infrastructure.

  - Simplification and downsampling is performed on-the-fly as the
    data is zoomed to reduce unnecessary drawing and make the
    interactivity much snappier.  Of course, when it comes to large
    data there are other issues about the network bandwidth and the
    memory efficiency of the data representation within the browser
    that may be limiting relative to what matplotlib can do now.

  - Text layout, including math text layout, is done at this stage,
    because the size of the text relative to other items can not
    be known until draw time.

It's obvious that the **Build** phase can remain on the server.  And
the **Rendering** phase can remain on the server for the native GUI
backends and the file formats.  We may need to write a "web browser"
backend, but that could be written in pure JavaScript if necessary.
It's that big **Drawing** piece in the middle that has to exist
sometimes on the server and sometimes on the client.  Ideally, this
code would not be duplicated, run both in CPython and in the web
browser (depending on usage) and remain as flexible and easy to read
as the Python code we already have.  Are you starting to understand
why this is a hard problem yet?

I hope to follow this blog post up with some experiments into various
possible solutions over the upcoming days and weeks.  In the meantime,
I encourage all the comments and help on this I can get.

------------

.. [1] It's easy enough to see what code is required for the drawing
   phase by using `coverage.py` and turning it on at the start of
   `Figure.draw` and turning it off again at the end.
