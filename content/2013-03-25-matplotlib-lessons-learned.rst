matplotlib lessons learned
##########################

:slug: matplotlib-lessons-learned
:category: matplotlib
:tags: matplotlib
:date: 2013-03-25 09:47

Jake Vanderplass has a very thought-provoking essay about the `future
of visualization in Python
<http://jakevdp.github.com/blog/2013/03/23/matplotlib-and-the-future-of-visualization-in-python/>`_.
It's an exciting time for visualization in Python with so many new
options exploding onto the scene, and Jake has provided a nice
summary.  However, I don't think it presents a very current view of
matplotlib, which is still alive and well with funding sources, and
moving to "modern" things like web frontends and web services, and has
nascent ongoing project related to `hardware acceleration
<https://github.com/rougier/gl-agg>`_.  Importantly, it has thousands
of person hours of investment in all of the large to tiny problems
that have been found along the way.

In the browser
--------------

One of the directions that new plotting projects are taking is to be
more integrated in the web browser.  This has all of the advantages of
cloud computing (zero install, distributed data), and integrates well
with great projects like the IPython notebook.

matplotlib is already most of the way there.  matplotlib's git master
has completely interactive and full featured plotting in the browser
-- meaning it can do everything any of the other matplotlib backends
can do -- by basically running something very similar to a VNC
protocol between the server and the client. You can try it out today
by building from git and using the WebAgg backend. Shortly, it will
also be available as part of Google App Engine -- so we'll get some
real experience running these things remotely in a real
"Internet-enabled" mode. The integration work with IPython still needs
to be done -- and I hope this can be a major focus of discussion at
SciPy when I'm there.

The VNC-like approach was ultimately arrived at after many months of
experimenting with approaches more based on JS and HTML5 and/or
SVG. The main problem one runs into with those approaches is working
with large datasets -- matplotlib has some very sophisticated designs
to make working working with large data sets zippy and interactive
(specifically path simplification, blitting of markers, dynamic down
sampling of images) all of which are just really hard to implement
efficiently in a browser. D3's Javascript demos feel very zippy and
efficient, until you realize how canned they are, or how much they
rely on very specific means to shuttle reduced data and from the
browser.  There's a place for interactive canned graphics as part of
web publishing, but it's much less useful for doing science on data
for the first time.  But in general from these experiments, I've become
rather skeptical of approaches that try to do too much in the
browser. Even though matplotlib is on the "old" paradigm of running on
a server (or a local desktop), the advantage of that approach is that
we control the whole stack and can optimize the heck out of the places
that need to be optimized. Browsers are much more of a black box in
that regard.

I don't know if WebGL will offer some improvements here.  It's enough
of a moving target that it should probably be re-examined on a regular
basis.

On the GPU
----------

And in the diametrically opposite direction, we have projects moving
plotting onto the GPU.  Particularly interesting to me here is the
`glagg <https://github.com/rougier/gl-agg>`_ project by Nicolas
Rougier and others.  It's important to note for those not in the
trenches that for high-quality 2D plotting on the GPU, things are much
less straightforward than for 3D.  Graphics cards don't "just do"
high-quality 2D rendering out of the box.  It requires the use of
custom vertex shaders (which are frankly works of extreme brilliance
and also an exercise somewhat in putting round pegs in square holes
and living to tell about it).  Unfortunately, these things require
rather recent graphics hardware and drivers and a fair bit of patience
to get up and running.  Things will get easier over time, but at the
moment, a 100% software implementation still can't be beat for
portability and maximum accessibility for less technically-inclined
users.  But I look forward to where all of this is going.

Real benchmarking on real data needs to be performed to determine just
how much faster these approaches will be for 2D plotting.  (For 3D,
which I discuss below, I think the advantages of hardware are more
apparent).

.. note::

  As a public service announcement, anyone looking for performance out
  of matplotlib should be using the Agg backend -- it's the only one
  with all optimizations available.  The Mac OS-X Quartz backend is
  built on a closed source rendering library with some puzzling and
  surprising performance characteristics.  Many of the attempts to
  speed up that backend involve workarounds for a black box that is
  not well understood.  For the Agg-based backends, however, we
  control the stack from top-to-bottom and are able to optimize for
  real-world scientific plotting scenarios.

In 3-dimensions
---------------

matplotlib's original focus has always been on 2D.  Despite this,
notably Benjamin Root and others continue to put a lot of effort into
matplotlib's 3D extensions, and they fill a niche for many users who
want clean and crisp vector 3D for print, and it's improving all the
time.  There are, of course, fundamental architectural problems with
3D in matplotlib (most importantly the lack of a proper z-ordering)
that limit what can be done.  That should be fixable with a few
well-placed C/C++ extensions -- I'm not certain that we need go whole
hog to the GPU to fix that, but that's certainly the obvious and
well-trodden solution.  I am concerned that too many of the new 3D
projects seem to prioritize interactivity and hardware tricks at the
expense of static quality.  For this reason, matplotlib may continue
to serve for some time as a high-quality print "backend" for some of
these other 3-D based projects.

Interfaces
----------

Another interesting direction of experimentation is in the area of
user interface and API.

I think matplotlib owes a lot of its success to its shameless
"embracing and extending" of the Matlab graphing API.  Having taught
matplotlib a few times to new users, I'm always impressed by how
quickly new users pick it up.

The thing that's a but cruftier and full of inconsistencies is
matplotlib's Object-Oriented interface.  Things there often follow the
pattern that was most easy to implement rather than what would be the
most clean from the outside.  It's probably due time to start
re-evaluating some of those API's and breaking backward compatibility
for the sake of more consistency going forward.

The `Grammar of Graphics
<http://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/GOG.html>`_
syntax from the R world is really interesting, and I think fills a
middle ground.  It's more powerful (and I think a little more complex
to learn at first) than the Matlab interface, but it has the nice
property of self-consistency that once you learn a few things you can
easily guess at how to do many others.

Peter Wang's `Bokeh <https://github.com/continuumio/bokeh>`_ project
aims to bring Grammar of Graphics to Python, which I think is very
cool.  Note however, that even there, Bokeh includes a matlab-like
interface, as does another plotting project `Galry
<https://github.com/rossant/galry>`_, so mlab is by no means dead.

Doomed to repeat
----------------

There are a lot of ways in which matplotlib can be improved.  I
encourage everyone to look at our `MEPS
<https://github.com/matplotlib/matplotlib/wiki>`_ to see some ongoing
projects that are being discussed or worked on.  There are some large,
heroic and important projects there to bring matplotlib forward.

But I think more interestingly for this blog post is to focus on some
of the really low-level early architectural decisions that have
limited or made it difficult to move matplotlib forward.  Importantly,
these aren't issues that I'm seeing discussed very often, but they are
things I would try to tackle up front if I ever get a case of
"2.0-itis" and were starting fresh today.  Hopefully these injuries of
experience can inform new projects -- or they may inspire someone with
loads of time to take on refactoring matplotlib.  It would not be
impossible to make these changes to matplotlib, but it would take a
concerted long-term effort and the ability to break some backward
compatibility for the common good.

Generic tree manipulations
''''''''''''''''''''''''''

matplotlib plots are more-or-less tree structures of objects that are
"run" to draw things on the screen.  (It isn't strictly a tree, as
some cross-referencing is required for things like referring to clip
paths etc.)  For example, the figure has any number of axes, each of
which have lines plotted on them.  Drawing involves starting at the
figure and visiting each of its axes and each of its lines.  All very
straightforward.  But there is no way to traverse that tree in a
generic way to perform manipulations on it.

For example, you might want to have a plot with a number of
different-colored lines that you want to make ready for
black-and-white publication by changing the lines to have different
dash patterns.  Or, you might want to go through all of the text and
change the font.  Or, as much as it personally wouldn't fit my
workflow, many people would like a graphical editor that would allow
one to traverse the tree of objects in the plot and change properties
on them.  There's currently no way to do this in a generic way that
would work on any plot with any kind of object in it.

I'm thinking what is needed is something like the much-maligned
"Document Object Model (DOM)" is needed (if I say "ElementTree"
instead, is that more appealing to Pythonistas?)  That way, one could
traverse this tree in a generic fashion and do all kinds of things
without needing to be aware of what specifically is in the plot.

Type-checking, styles, properties, traits
'''''''''''''''''''''''''''''''''''''''''

matplotlib predates properties and traits and other things of that
ilk, so it, not unreasonably, uses `get_` and `set_` methods for most
things.  Beyond the syntactic implications of this (which don't bother
me as much as some), they are rather inconsistent.  Some are available
as keyword arguments to constructors and plotting methods, but it's
inconsistent because some must be manually handled by the code while
others are handled automatically.  Some type-check their arguments
immediately, whereas others will blow up on invalid input much later
in some deeply nested backtrace.  Some are mutable and cause an update
of the plot when changed.  Some seem mutable, but changing them has no
effect.  Traits (such as Enthought Traits or something else in that
space) would be a great fit for this.  It's been examined a few times,
and while the idea seems to be a good fit, the implementation was
always the stumbling block.  But it's high time to look at this again.

Combining this with the tree manipulation suggestion above, we'd be
able to do really powerful things like CSS-style styling of plots.

(Didn't I just say above that web browsers weren't well suited, yet
I'm stealing some fundamentals of their design here...?)

Related to the above, matplotlib's handling of colors and
alpha-blending is all over the map.  There needs to be a cleanup
effort to make handling consistent throughout.  Once that's done, the
way forward should be clear to manage CMYK colors internally for
formats that support them (e.g. PDF).  Ditto on other properties like
line styles and marker styles.

Projections and ticking
'''''''''''''''''''''''

Ticking is the process by which the positions of the grid lines, ticks
and labels are determined.  There are a number of third-party projects
that build new projections on top of matplotlib (`basemap
<http://matplotlib.org/basemap/>`_, `pywcsgrid2
<http://leejjoon.github.com/pywcsgrid2/>`_, `cartopy
<http://scitools.org.uk/cartopy/>`_ to name a few).  Unfortunately,
they can't really take advantage of the many (and subtly difficult)
ticking algorithms in matplotlib because matplotlib's tickers are so
firmly grounded in the rectilinear world.  matplotlib needs to improve
its tickers to be more generic and more usable when the grid is
rotated or warped in a myriad of ways so that all of this duplication
of effort can be reduced.

Related to this, matplotlib have transformations (which determine how
the data is mapped to the Cartesian space on screen), tickers (which
determine the positions of grid lines), formatters (which determine
how the tick's text label is rendered) and locators (which choose
pleasant-looking bounds for the data), all of which work in tandem to
produce the labels, ticks and gridlines, but which have no
relationship to each other.  It should be easier to relate these
things together, because you usually want a set that works well
together.  Phil Elson has done some work in this direction, but
there's still more that could be done.

Higher dimensionality
'''''''''''''''''''''

matplotlib's 3D support feels tacked on structurally.  It would be
better if more parts were agnostic to the dimensionality of the data.

May you live in interesting times
---------------------------------

It's really exciting to watch all that's going on, and thanks to Jake
Vanderplass for getting this discussion rolling.
