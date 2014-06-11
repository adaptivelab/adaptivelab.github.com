---
layout: page
title: "Using Git"
---
{% include JB/setup %}


We use git and GitHub for version control of our source code.


Git Flow
--------

We use [git flow](https://github.com/nvie/gitflow) for managing our branches.  It's pretty simple once you get used to it.  We work from a branch called 'develop' and only merge changes in to master once they're ready for a new release.  We stick with the standard git flow branch names and have no restriction on feature names as yet, as long as they make sense to other readers.

> If you're new to git flow, this is [a good article to start from](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/).

Here's a quick example of how to work on a new feature of a new project using git flow:

Clone the repo:

    $ git clone git@github.com:adaptivelab/adaptivelab.github.com.git

Initialize git flow, accepting all the defaults:

    $ git flow init

Start work on your feature:

    $ git flow feature start some_awesome_addition

Happily code away and then merge it back into develop once it's done:

    $ git flow feature finish some_awesome_addition


> Don't forget to push your develop branch up to github, to help resolve any conflicts your code might have with others working on the same repo.

Git flow takes care of things like removal of local branches when they're no longer needed and tagging the code every time you make a new release.


Commit Often
------------

Since you're on your own branch, don't be afraid to commit as you go.  It won't hurt anyone and your own commit messages can help you work out where you left off last time you worked on this feature.  You can always tidy up a bunch of commits, squashing them with an interactive rebase to turn them into single, meaningful commits.

Push your branch up to github if you want to save it for working elsewhere or for another developer to take a look at.  Just don't forget to remove it once it has been merged, as that won't be done for you!


Public vs Private
------------------

When you're creating a new repository, why not let it go public?  If it doesn't contain some super secret algorithmic sauce then there should be no problem letting the wider community see your work - it's going to be better than they can do and you know it!  Plus it's cheaper than hosting tons of private repos.


Don't Check In Passwords!
------------------------

We'll come back on to [security](/pages/security.html) later but for now just know that you shouldn't commit anything that should be considered secret.  That includes passwords, api keys and anything else that might be sensitive information.  It's not good enough to remove secrets after the fact either - git is designed to keep all changes historically and it's very difficult in practise to remove secrets from past commits.

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
