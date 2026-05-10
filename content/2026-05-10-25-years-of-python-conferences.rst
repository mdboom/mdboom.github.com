25 Years of Attending Python Conferences
########################################

:date: 2026-05-10
:modified: 2025-05-10
:tags: python, ai
:authors: Michael Droettboom
:summary: Reflections on 25 years of Python conferences

I'm about to head off to PyCon US 2026 in Long Beach, California.  The first
Python conference I attended was `The Ninth International Python Conference
<https://web.archive.org/web/20010418224615/http://www.python9.org/>`__ in
2001, almost exactly 25 years ago, also held in Long Beach, though undoubtedly
in a much smaller venue.  All of this has me reflecting a lot on what has
changed over that time and how it relates to this time of rapid change of our craft.

.. image:: /images/proceedings.jpg

Python 9 (2001) was a really important week for me.  It's when I first met Guido
van Rossum, and I also met my later-to-become boss of many years, Perry
Greenfield (we were practically neighbors in Baltimore at the time but met in
Long Beach).  Reading back through the proceedings is a real trip.  Some of the
things that were important and unsolved then are still important perpetually
being re-solved now, such as "how should I call C/C++ from Python?".  But the
most common "brag" throughout many of the papers was how few lines of code their
Python projects were.

That was the headline: by writing in Python, you are freed from the boilerplate
of more verbose languages, and you can do things that would have been much
harder any other way.  It was in the air at the time.  A `study
<https://page.mi.fu-berlin.de/prechelt/Biblio/jccpprt_computer2000.pdf>`__ from
2000 claimed that "Perl, Python, Rexx, or Tcl takes no more than half as much
time as writing it in C, C++, or Java and the resulting program is only half as
long."  Never mind that that study only looked at very small programs: it was
the battle of the dynamically-typed languages vs. the statically-typed ones.
You could prototype quickly and easily iterate without making sure all of the
types across your entire codebase match up, and this would make you much more
productive.  "Duck typing" (`a phrase attributed to Alex Martelli
<https://groups.google.com/g/comp.lang.python/c/CCs2oJdyuzc/m/NYjla5HKMOIJ>`__) was often
cited as shorthand for a superior way to deal with interfaces between parts of
complex systems.  Dynamic typing was the "silver bullet" pitch of Python at the
time, and in my mind there is a direct line from this thinking to the famous
`"import antigravity" XKCD comic <https://xkcd.com/353/>`__ in 2007.

The reality is of course much more complicated, and we all know silver bullets
don't exist.  While the ability to quickly prototype with Python is certainly
true--- making it particularly suitable to "exploratory programming" and its
explosion in scientific computing, data science and later AI---for larger and
more complex projects, the flexibility of dynamic typing began to become a
liability.  Too many errors that should have been caught at build time were
instead not surfacing until runtime. The old stodgy ideas about static typing
that had been dismissed as "boilerplate" started to look more attractive as a
way to manage complexity and improve maintainability.  `PEP 484
<https://peps.python.org/pep-0484/>`__, adding optional
type annotations to the language, was accepted in 2015, after years of
discussion and debate.  (And it wasn't just Python --- JavaScript begat
TypeScript, for example.)  Dropbox invested in static typing support,
especially the `mypy <https://mypy-lang.org/>`__ type checker, to help maintain their large codebase.
Static typing
remains an optional feature of Python, and I would wager to guess most of the
long tail of Python programmers don't use them, but almost all are benefitting
from them.  They are used in the most popular libraries, helping IDEs make
better suggestions, and AI-assisted tools find the right things to call.  While
strictly-speaking it's all still the same Python, I would describe Python
projects with type annotations and using all of the modern developer tooling it
enables to be a real step forward in how safe, maintainable and easy to change
they are, enough to call it "Python 4" if that didn't initially give everyone
PTSD.  I, for one, really feel their absence when working on projects without
them.  So we have arrived at this really good place that preserves a lot of the
fun and "magic" from the earlier days of Python, combined with the
initially-dismissed (even frowned-upon) ideas from static typing.  It's a
classic pendulum swing arriving back at a midpoint.

Which gets me to why I'm rehashing all of this history, none of which is
particularly new at this point.  I can't help but see a lot of parallels between
the initial enthusiasm for Python and the current enthusiasm for AI-assisted
software development.  Particularly interesting to me is the way that the
development of simple prototypes feels like a massive step up in productivity,
but as things scale, and you get into more complex projects and the
all-important overheads of communicating between different people or parts of a
system, you start to see the cracks.  I think some of the classic software
engineering practices that maybe feel like pedantic, unimportant busy work (just
as static typing did in the early Python days) are only going to become more
important.  This is a broad set of core and well-established practices, like
naming things well, writing good documentation, writing tests, making those
tests easily reproducible, etc.  Which brings me to my pet-peeve of the year
that burns my soul with the heat of a thousand suns when I hear it, which is
that "we don't need to do X, Y, or Z anymore because agents will be writing all
of our code in the future".  I think this is a dangerous mindset, full stop.  It
falls into the same trap as that productivity paper from 2000: extrapolating
from the productivity gains on simple projects to complex ones is nonsensical.
Knowing that this post may be up for a while, I will concede, of course, that
there might be some things we all do today that may become less important.  Some
are likely to become more important.  But we don't know what those are yet.  It
took us more than the 25 years that I've been paying attention to understand
what's important in software engineering in the absence of AI tools.  It's going
to take some time to realize what's important in a world where AI tools
dominate.  Let's hope we can keep the pendulum from swinging too far out in the
meantime.

See y'all in Long Beach!