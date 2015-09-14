#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import os

AUTHOR = u'Michael Droettboom'
SITENAME = u'Boom!  Michael Droettboom\'s blog'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

STATIC_PATHS = ['static', 'images', 'papers']

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DISPLAY_CATEGORIES_ON_MENU = False

# Blogroll

LINKS = (
    ('Python', 'http://python.org'),
    ('Jupyter', 'http://jupyter.org'),
    ('Astropy', 'http://astropy.org'),
    ('Numpy', 'http://numpy.org'),
    ('Valgrind', 'http://valgrind.org'),
    ('Emacs', 'http://www.gnu.org/software/emacs/'),
    ('i3 window manager', 'http://i3wm.org/'),
    ('tmux', 'http://tmux.sf.net/'),
    ('Sphinx', 'http://sphinx.pocoo.org/'),
    ('Fedora Linux', 'http://fedoraproject.org'))

DEFAULT_PAGINATION = 3

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

THEME = os.path.join(os.path.dirname(__file__), '..', 'pelican-bootstrap3')

DISQUS_SITENAME = "mdboom"
DISQUS_NO_ID = True

BOOTSTRAP_THEME = "darkly"

CUSTOM_CSS = 'static/custom.css'

FAVICON = 'images/favicon.png'

GITHUB_USER = "mdboom"
