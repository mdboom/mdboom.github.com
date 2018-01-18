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

STATIC_PATHS = ['static', 'images', 'papers', 'extra/CNAME']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DISPLAY_CATEGORIES_ON_MENU = False

# Blogroll

LINKS = (
    ('Mozilla', 'http://mozilla.com'),
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

THEME = os.path.join('themes', 'pelican-bootstrap3')

DISQUS_SITENAME = "mdboom"
DISQUS_NO_ID = True

BOOTSTRAP_THEME = "flatly"

CUSTOM_CSS = 'static/custom.css'

FAVICON = 'images/favicon.png'

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}

PLUGIN_PATHS = ['plugins']
PLUGINS = ['i18n_subsites']

SITELOGO = 'images/favicon.png'

AVATAR = 'images/headshot.jpg'
ABOUT_ME = "I'm a computer scientist and software engineer, specializing in imaging and data: sheet music, scientific visualization, astromony, biomedical data and software telemetry.  Open source software and open science advocate."

SOCIAL = (('github', 'http://github.com/mdboom'),
          ('linkedin', 'http://linkedin.com/in/mdboom'),
          ('twitter', 'http://twitter.com/MDroettboom'),
          ('keybase.io', 'http://keybase.io/mdboom', 'check'))

CC_LICENSE = "CC-BY-NC"
