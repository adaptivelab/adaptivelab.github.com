---
layout: page
title: "Using Git"
description: ""
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

Git flow takes care of things like removal of branches when they're no longer needed and tagging the code every time you make a new release.


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


Collaboration process
---------------------

*Approach to coding in teams*

**Product manager** - The person that manages the product  
**Author** - The person that wrote the code  
**Reviewer** - The person that reviews the pull-request

### 1. Starting a new feature

New tasks should be developed on a new feature branch (and please break them
up onto several if you can).

- Feature branch names start with `feature`
- Branch names should be infixed with your initials e.g. `feature/sm/indexing-awesomeness`
- Features should be small, ideally only affecting a few files (rule of thumb: &lt;5)
- Commits should be smaller
- Push up to the *remote* regularly (in case someone else needs to take over)

### 2. Getting sign-off

Your work should be signed off by the product manager before making a pull request. Either deploy to a demo environment or let them see it on your machine.

### 3. Making a pull request

Your code should be reviewed by anothe developer via a pull request. This helps to improve the overall quality of our code.

- **Squash & Rebase** against the latest `develop` branch

        # Squash commits into as few as possible (rule of thumb: <5)
        # Example squash & rebase:
        $ git checkout feature/sm/indexing-awesomeness
        $ rebase -i develop

- **Create a pull-request**, where possible, use the relevant user story for the title, and include a URL

        # If you have `hub`
        $ hub pull-request -b develop -h feature/sm/indexing-awesomeness

- **Assign it to someone**, this can be someone on your team or anyone else in the company.

### 4. Doing the code review

Now the code will get reviewed, and you might want to make changes based on the feedback.

**Reviewer to:**

- Make sure there are enough tests
- Make sure the tests pass
- Make sure the code is as easy to understand as is possible

**Author to:**

- Respond to feedback and/or update code
- Push updates to the *remote*

### 5. Closing the pull request and finishing the feature

Once the code has been okayed the reviewer can close the pull request.

**Reviewer to:**

- **Rebase** against the latest develop branch
- **Merge** via fast-forward only to develop

        $ git checkout develop
        $ git merge --ff-only feature/sm/indexing-awesomeness

- **Push** `develop` to remote
- **Close** the *pull request* in github.
- **Delete** the *remote* feature branch

        $ git push origin :feature/sm/indexing-awesomeness

