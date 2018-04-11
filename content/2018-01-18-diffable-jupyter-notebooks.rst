Jupyter notebooks and version control
#####################################

:date: 2018-01-18
:modified: 2018-01-18
:category: mozilla
:tags: jupyter, python, data science
:slug: diffable-jupyter-notebooks
:authors: Michael Droettboom
:summary: Presents an experimental alternative file format for Jupyter notebooks that plays nicer with version control.

**Summary:** Presents an experimental alternative file format for Jupyter notebooks that plays nicer with version control.

**UPDATE: 2018-04-11:** Matthias Bussonnier pointed out on Twitter he did something `very similar quite some time ago <https://matthiasbussonnier.com/posts/05-YAML%20Notebook.html>`__.  Given the interest, what can we do to push this along so it's an obvious choice for Jupyter users?

The problem
-----------

There's no doubt that Jupyter notebooks are taking over the world for data science experimentation.
When notebooks are relied on for ongoing decision-making within an organization, it's inevitable that, like all software, they will require bugfixes or updates.
Without proper version control of these changes, its difficult to know what changes were made, and, more importantly, to reason about what effect those changes may have had on the results.
While you can simply put Jupyter notebooks into a version control system (VCS), such as `git <http://git-scm.com>`__, the design of the notebook file format makes certain important operations, like calculating the difference between two revisions, less friendly than they could be.

For example, the `Jupyter notebook file format <http://nbformat.readthedocs.io/>`__ contains binary blobs for image output.
The diffs between these sections are large and noisy, and ultimately unhelpful to the software developer reviewing a pull request.
Secondly, since the file format is based on `JSON <http://www.json.org>`__, multi-line strings (such as all source code) are full of boilerplate:
Each line is in its own set of double-quotes, with explicit newlines (``\n``).  For example, this Python::

    items = []
    for i, item in enumerate(database.all_docs(params={'include_docs' : True})):
        if i > 1: break
        items.append(item)
    print items

turns into the following JSON::

   "source": [
     "items = []\n",
     "for i, item in enumerate(database.all_docs(params={'include_docs' : True})):\n",
     "    if i > 1: break\n",
     "    items.append(item)\n",
     "print items"
   ]

All of this makes it more difficult to see meaningful changes through all the noise.

Some solutions
--------------

I'm by no means the first person to notice these issues, and others have tackled this problem from different directions.

In the blog post `Making Git and Jupyter play nice <http://timstaley.co.uk/posts/making-git-and-jupyter-notebooks-play-nice/>`__, Tim Staley suggests filtering the notebook files to remove the output cells and less important content (such as ``metadata`` or ``execution_count``).
While this goes a long way to removing a lot of the "noise" in diffs, the content is still JSON.

`ipymd <https://github.com/rossant/ipymd>`__ perhaps comes the closest to solving this problem, in my opinion, by converting notebooks to markdown, with code inserted as standard markdown code blocks.  For example::

  Here is some Python code:

  ```python
  >>> print("Hello world!")
  Hello world!
  ```

It currently has a major shortcoming, in that it doesn't handle non-textual output cells.
Jupyter output cells are more complex than they might appear at first glance, as each can include multiple representations of the same thing, allowing the front-end to ultimately choose the best based on context.
I think there are probably some clever ways that could be resolved, but any solution is likely to be lossy relative to what standard Jupyter notebooks can do, or break strict compatibility with markdown.

There is also `nbdime <http://nbdime.readthedocs.io/en/stable/>`__: a tool designed specifically for diffing and merging Jupyter notebooks.
The advantage of nbdime is that, since it was purpose-built for Jupyter notebooks, the user interface can take advantage of notebook-specific features, such as image diffing.
Unfortunately, it is hard to integrate it into existing code review workflows, like Github pull requests.
Here at Mozilla, for example, many of those doing data science in Jupyter notebooks are Firefox software engineers first and foremost, so they are comfortable and opinionated about the community of "power tools" built around version control: suggesting a single-use tool just for notebooks might be a hard sell.

Yet another idea
----------------

Given all this, I've experimented with an approach that both allows for better diffs while still retaining all of the information present in a Jupyter notebook.
There are lot of ways it could be done, but in the interest of not inventing entirely new syntax, it turns out you can get a large part of the way to the goal by just using `YAML <http://yaml.org>`__ instead of JSON, with the following tweaks to the YAML writer:

- Always write markdown, source code and text output in `literal style <http://www.yaml.org/spec/1.2/spec.html#id2795688>`_.  This avoids the explicit newlines required for multi-line text in JSON.

- Remove any keys that point to empty lists or dictionaries, e.g. a ``metadata`` entries without any actual metadata.

- Order the keys in a consistent way that makes sense to humans.  For example, for each cell include the ``cell_type`` first, followed by the content, with less important things like ``metadata`` and ``execution_order`` afterward.

- Non-textual output cells are saved externally into a directory of files.
  This keeps output out of the diff of the main code in the notebook, but it's still present when the notebook is reloaded.

For example, here is a cell with output in this YAML-based format::

  - cell_type: code
    source: |-
      fig, ax = plt.subplots(figsize=(18,10))
      sns.boxplot(df.ARR_DELAY_NEW, df.FL_DATE, ax=ax)
      fig.autofmt_xdate()
    outputs:
    - output_type: display_data
      data:
        text/plain: |-
          <matplotlib.figure.Figure at 0x7f679ad6e190>
        image/png: Exploration of Airline On-Time Performance_files/6ff8d173e4d8a288.png
    metadata:
      collapsed: false
    execution_count: 45

Compare that to the original in standard Jupyter notebook JSON::

    {
     "cell_type": "code",
     "input": [
      "fig, ax = plt.subplots(figsize=(18,10))\n",
      "sns.boxplot(df.ARR_DELAY_NEW, df.FL_DATE, ax=ax)\n",
      "fig.autofmt_xdate()"
     ],
     "metadata": {
      "collapsed": false
     },
     "outputs": [
      {
       "metadata": {},
       "output_type": "display_data",
       "data": {
        "text/plain": [
         "<matplotlib.figure.Figure at 0x7f679ad6e190>"
        ],
        "image/png": "...BASE64 encoded data removed...",
       }
      }
     ],
     "execution_count": 45
    },

The result is something that is not quite as user-friendly as the markdown produced by ipymd, but it is fully lossless.
Another nice feature of the design is that converting from this format back to a standard Jupyter notebook is as simple as loading YAML, snarfing the external content back in place, and writing out JSON.  That hopefully bodes well for its future-proofing as Jupyter continues to evolve.

One problem still present is that markdown cells don't diff very well, since in most cases markdown paragraphs are written as one long continuous line.
Brandon Rhodes has some great suggestions about using `semantic linefeeds <http://rhodesmill.org/brandon/2012/one-sentence-per-line/>`__ to make prose more easily diffable that would help there, but I don't think that is 100% automatable.

Playing with the idea
---------------------

I have an `experimental plugin <http://github.com/mdboom/nbconvert_vc>`__ for `nbconvert <http://nbconvert.readthedocs.io/>`__ on Github that implements the conversion to and from this YAML-based format.
As an experiment, I ran the conversion over the entire git history of a collection of Jupyter notebooks put out by `IBM Emerging Technologies <https://github.com/ibm-et/jupyter-samples>`__.
(`git filter-branch <https://git-scm.com/docs/git-filter-branch>`__ is an awesome tool for this exact purpose, by the way.)
Many of the notebooks in this repository have no history (whether that's because versioning Jupyter notebooks is too hard, we may never know), but for those that do have history, there is definitely some useful improvement, for example compare `before <https://github.com/ibm-et/jupyter-samples/commit/29162a6ed77ccb2ef23cd530f5f028a9e1a3a27c>`__ and `after <https://github.com/mdboom/jupyter-samples/commit/0060324e6618afa52c571278f86876a60cce2899>`__.

My main purpose of this blog post is just to solicit feedback on these ideas as I work toward a solution for better support for version control workflows with Jupyter notebooks.
Please leave comments, suggestions and questions below.

Acknowledgements
----------------

This work was supported by ``moz://a``.
