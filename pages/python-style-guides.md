---
layout: page
title: "Python Style Guidelines"
description: ""
---

{% include JB/setup %}

It is important code is written to certain stylistic standards. Being able to look at code and not having to switch stylistic context makes development easier.

Python is unique in the fact it has a community approved style guide known as PEP8. This guide changes and evolves over time so do keep an eye on changes to it: ([http://www.python.org/dev/peps/pep-0008/](http://www.python.org/dev/peps/pep-0008/))

The main bullet points of PEP8 are:
* Spaces, not tabs
* 4 space indentation
* Maximum line length should be 79 characters
* Docstrings should be wrapped to 72 characters, but this isn't really enforced

### Imports

Imports should be one per line and comma separated explicit function imports should be avoided. For example:

**Good:**

    import os
    import sys

**Bad:**

    import os, sys

**Discouraged:**

    from os.path import basename, dirname, join as os_join
    from other.module.foo import join as foo_join

This can lead to messy imports and possibly confusing function names when function name conflict emerge.

    from some.module.foo import parse as foo_parse
    from some.module.bar import parse as bar_parse

It also allows your code to self describe what its doing, for example:

    join('foo', 'bar')  # What is the magical join function?
    os.path.join('foo', 'bar')  # You know this is creating a path

Also try and order your imports alphabetically. If you need use ``from x import y``, do not mix these within imports, keep them clear and separate. Exceptions to this are ``__future__`` imports, which need to go above all other imports, for example:

**Bad: hard to read and messy**

    from __future__ import division
    import signal
    import sys
    import multiprocessing
    import requests
    from dateutil.parser import parse
    from dateutil.tz import tzutc
    import datetime
    import pickle
    import time
    import logging
    from safelogger import getMultiProcessLogger

**Good (much cleaner and easier to read):**

    from __future__ import division

    import datetime
    import logging
    import multiprocessing
    import pickle
    import requests
    import signal
    import sys
    import time

    from dateutil.parser import parse
    from dateutil.tz import tzutc
    from safelogger import getMultiProcessLogger

### Strings

#### Single vs double quotes

In python you can use both single a double quotes for interpolation. This means the use of single or double quotes is purely a stylistic choice in python, however consistency is still key.

When it comes to docstrings there is a PEP for that, [PEP 257](http://www.python.org/dev/peps/pep-0257/).

In ruby double quotes are required for interpolated strings, so in order to allow for cleaner context switching between the two languages all text in python that requires interpolation should be double quoted. For example this is single quoted as it’s not interpolated:

    with open('some/path/foo.txt', 'r') as f:

However these strings are used for interpolation:

    somevar = "This will be {0}".format('interpolated')

#### Formatting

When formatting strings, always use the format method. To avoid issues on Python 2.6 and older environments, and to make code as explicit as possible, always define indices or identifiers. For example:

**Discouraged:**

    foo = "Hello {}".format('world')

**Good:**

    foo = "Hello {0}".format('world')
    # or
    foo = "Hello {message}".format(message='world')

### Indentation

As PEP8 prescribes that line lengths should not be greater than 79 characters, indentation can become quite important. Especially so when you have long function definitions or are chaining function calls.

**Bad:**

    def my_long_function(
        arg1
        arg2='foo',
        arg3='bar'):

        pass

**Also Bad:**

    def my_long_function(arg1, arg2='foo',
                         arg3='bar'):
        pass

**Good (Note it’s double indented which allows you to see separation from function code):**

    def my_long_function(
            arg1
            arg2='foo',
            arg3='bar'):

        pass

**Also cool:**

    def my_long_function(arg1
                         arg2='foo',
                         arg3='bar'):
        pass

### Docstrings and Comments

A docstring should come directly after a function definition and should contain a brief description of what the function does, any arguments the function takes and the type of returned data if applicable. Docstrings should use double quotes and start on new lines.

Comments should start with a hash (#) and should be limited to a single line if possible.

Also check out [PEP 257](http://www.python.org/dev/peps/pep-0257/).

**Example:**

    def foo(arg1, arg2=False):
        """
        Augments arguments to return foobar'ed values.

        :param arg1: The first value to augment
        :type arg1: str

        :param arg2: Do really bad things -- Default False
        :type arg2: bool

        :returns: str
        """

        do_pythony_things()  # Inline comments, 2 spaces away

        # This does cool things
        foo = cool_things()

        return foo

#### File docstrings

It’s a good idea to add a docstring to the top of the file. This can contain a brief synopsis of the module and the python dotted path for importing this module, usage example may also be good.

    """
    .. module:: thing.foo.bar
       :synopsis: Does some cool things with python.
    """

    def foo():
        pass

#### File encoding: [PEP 263](http://www.python.org/dev/peps/pep-0263/)

This particular PEP is regarding always setting file encodings at the top of files. This is good practice and something we should comply to for all the reasons lined out [here](http://www.python.org/dev/peps/pep-0263/). In general we should always encode to UTF-8 unless there is a good reason not too.

    # -*- coding: utf-8 -*-

    """
    File docstring
    """

    def foo():
        pass

<div class="dotted-rule">
</div>
<section class='text-block'>
  <div class='footer'>
    <a href='https://www.adaptivelab.com/contact'>
      <div class='caption'>
        Want to know more?
      </div>
      <h2>
        Get in touch
        <div class='forward-arrow'>
        </div>
      </h2>
    </a>
  </div>
</section>
