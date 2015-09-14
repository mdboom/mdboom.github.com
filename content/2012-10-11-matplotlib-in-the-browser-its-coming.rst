Matplotlib in the browser: It's coming
######################################

:slug: matplotlib-in-the-browser-its-coming
:date: 2012-10-11 14:35
:comments: true
:category: matplotlib

.. pull-quote::

  UPDATE: I am now sharing my code in the
  `mdboom/mpl_browser_experiments
  <https://github.com/mdboom/mpl_browser_experiments>`_ github
  repository, rather than in a gist.

It's occurred to me recently that in my previous blog posts `Part II
<http://mdboom.github.com/blog/2012/08/07/client-side-rendering-in-matplotlib/>`_
and `Part I
<http://mdboom.github.com/blog/2012/08/06/matplotlib-client-side/>`_,
I was going about the problem all wrong.  Getting the plotting logic
running in the browser, while perhaps ideal, was full of pitfalls.
The browsers all render things in different ways and have different
performance characteristics.  Large data structures in Javascript just
start to fall over after a certain point.

One effective way to deal with the large data structure problem is to
just not send them to the browser at all, but instead, send rendered
images.  While the size of the data scientists will want to process
with Numpy and matplotlib is growing all the time, the size of the
images being rendered have natural limits based on the resolution of
our displays. (Retina displays have recently bumped this up, but even
then, display resolution increases slowly relative to RAM and disk
space).  So while for simple plots, sending and using the data wins,
for anything beyond a reasonable amount of complexity, sending
rendering images beats it (in terms of bandwidth) every time.

The other advantage of this approach is that it will work *exactly*
like regular matplotlib.  All of the effort and work that has already
gone into matplotlib to make it as feature-rich and pixel-perfect as
it is will apply immediately.

So I started to look at how we could just pipe what we already have --
a high-quality, fast, and extensive rendering framework based on `Agg
<www.antigrain.com>`_ -- into the browser.

Experiments with VNC
--------------------

An obvious pre-existing hammer on the shelf was `VNC
<www.realvnc.com>`.  There are free servers available for all of the
big platforms, and there is, believe it or not, a client written
entirely in Javascript that runs in the browser: `noVNC
<http://kanaka.github.com/noVNC/>`_.  After a little tinkering (I'll
spare you the details), it's possible to share a single GUI window in
the matplotlib kernel with a browser.  And it works, more or less,
although a little slowly.

There are few problems with using VNC (and this mostly applies to its
competitor NX as well):

   1) VNC servers hook directly into the GUI technology of your
      platform, so each platform handles setting up a server rather
      differently.  I'm always loathe to reach for solutions that
      involve a lot of platform-specific differences -- it becomes a
      nightmare to support.

   2) There's a lot of unnecessary moving pieces.  On X11, for
      example, the VNC wants to be an entire X server, with a window
      manager etc.  The window being shared, of course, has to be
      implemented in some GUI framework or other.  That's a lot of
      extra stuff to install on a headless server that we don't really
      need.

   3) The `noVNC` client has to interpret the binary VNC protocol *in
      Javascript*.  Joel Martin and the rest of the team are total
      rockstars and they've pulled off something very impressive.  But
      at the end of the day, it's not a great fit, and it wastes a lot
      of cycles.

So VNC almost gets us there, and the fact that it works "almost well
enough" gave me confidence that a more "conduit"-based approach would
work.  So I got to thinking about what the bare minimum thing is that
could work.

The fact is that VNC, at least as it was being used in the above
context, is just sending events from the keyboard and mouse from the
client, and getting delta images from the server.  It has a rather
sophisticated way of compressing those delta images, but at the end of
the day, that's all it really does for us, and all we really need.

It turns out that creating delta images in PNG doesn't work too badly.
The empty pixels compress away rather well, and the compression and
decompression can be handled in C at both ends of the pipe.  That is,
browsers know how to decompress PNGs inherently -- they don't need to
run slow and complex Javascript to do so, so while it may not be the
optimal protocol, it's a good choice in a practical sense.

A proof of concept
------------------

So `in this repository
<https://github.com/mdboom/mpl_browser_experiments>`_, I present a
proof-of-concept for this approach.  I have some hideously rough and
undocumented code that, given a matplotlib figure, serves it
interactively to a web browser.  It requires only matplotlib and
`Tornado <http://www.tornadoweb.org/>`_ (which you probably already
have if you already have a recent IPython).  It's obviously a long way
from here to something that's a true matplotlib backend and
well-integrated with IPython notebook.  This code in no way represents
the final API.  I also don't do a lot of network programming, so I may
be handling the AJAXy things suboptimally.  However, I'd appreciate
testing of this approach on different platforms and browsers to just
prove its feasibility before putting in too much of that follow-on
work.

To use it, just create a matplotlib figure, with whatever you want,
and pass it to ``serve_figure.serve_figure()``.  For example, take the
quadmesh example (something that would be really hard to implement in
HTML5 canvas) and serve it::

  import serve_figure

  import numpy as np
  from numpy import ma
  from matplotlib import pyplot as plt

  n = 12
  x = np.linspace(-1.5,1.5,n)
  y = np.linspace(-1.5,1.5,n*2)
  X,Y = np.meshgrid(x,y);
  Qx = np.cos(Y) - np.cos(X)
  Qz = np.sin(Y) + np.sin(X)
  Qx = (Qx + 1.1)
  Z = np.sqrt(X**2 + Y**2)/5;
  Z = (Z - Z.min()) / (Z.max() - Z.min())

  # The color array can include masked values:
  Zm = ma.masked_where(np.fabs(Qz) < 0.5*np.amax(Qz), Z)

  fig = plt.figure()
  ax = fig.add_subplot(121)
  ax.set_axis_bgcolor("#bdb76b")
  ax.pcolormesh(Qx,Qz,Z, shading='gouraud')
  ax.set_title('Without masked values')

  ax = fig.add_subplot(122)
  ax.set_axis_bgcolor("#bdb76b")
  col = ax.pcolormesh(Qx,Qz,Zm,shading='gouraud')
  ax.set_title('With masked values')

  serve_figure.serve_figure(fig, port=8888)

Open up your webbrowser to `http://127.0.0.1:8888` and you should
(hopefully) be in business.  Open up a second browser window (whether
locally or on another machine) and note that the two plots are
automatically synchronized.  The "data cursor" (that displays the
current location of the mouse cursor in data coordinates) also works.

.. figure:: http://mdboom.github.com/images/firefox.png

   Matplotlib running in Firefox

Some back-of-the-napkin thoughts about performance: The average size
of each frame at the default resolution is around 16 kbytes.  On a
standard 1MB DSL connection, we should be able to pipe 7000 of those
per second, so it should be fine in terms of bandwidth.  Of course,
there are other factors, such as the latency of the network and the
CPU time necessary to decompress the PNG files etc. that are harder to
take account of.  This will require some real-world testing to really
get a sense of how well it works.

There's a lot of finesse to follow.  For example, we should be able to
shrink the bandwidth by another 20% by using a 1-bit alpha channel.
The cursor shape doesn't ever change like it does in a regular
matplotlib window.  It should be possible (though not yet) to support
the interactive callbacks in matplotlib to handle the mouse events in
arbitrary ways inside of the server.  In principle, there are very few
limitations to this approach, and it has the potential to be a true
peer to the existing backends.

Watch the matplotlib and IPython projects -- pull requests will be
coming soon.
