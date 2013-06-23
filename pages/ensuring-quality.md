---
layout: page
title: "Ensuring Quality"
description: ""
---
{% include JB/setup %}

We all want to produce work of good quality.  The whole reason for this guide is to establish those best practices that help us achieve a level of quality at all aspects of design, development and deployment of our products.  Here we discuss at a high level some of those topics that deal specifically with ensuring the work we produce is of good quality, referencing the other sections of this guide that focus in on the details.


Discuss your approach before you start coding
----------------------------------------

This isn't necessary all the time, but it can be really helpful for you to seek out the confirmation from anyone in the team who might be capable, that the approach you're about to take with a particular problem is a good one.  They might have worked on similar problems before, or they may not, but it's still handy to be able to bounce an idea off others and have them come back to you all nice and confirmed.


Testing
-------

We've covered [the ins and outs of testing](/pages/testing.html) in more detail elsewhere, but on the subject of quality assurance here's how unit tests, integration tests and the like can play a huge part:

### Avoiding Regression Errors

When the test coverage is good, you can hack away happily, safe in the knowledge that if what you've just produced happens to break some old bit of code, then that breakage is at least going to be picked up before release.  It's a big problem for long-running projects, which is why it's important to test everything you add - even the minor changes, so that problems of regression get picked up in the future by you and any of your team-mates.

### Ensuring Delivery to Spec

Tests can be used at the outset like a blueprint for what it is you're about to build.  Put high-level tests in place at the start of a task that describe what it is the outcome will be and as you work away, adding unit tests in for the components you build, once the high-level tests pass then job done!

### Getting Ready for a Release

When the team is united in their goal for complete test coverage, once a sprint is done and there is a release to be released, once the code has all been merged in together, a green test pass will take off some of the pressure that hitting the deploy button won't turn out hideously badly.


Dependencies
----------

How well does the code you've just spent time honing on your local machine translate to living in the wilds of a production server cluster, or on other developer's machines?  Think about the dependencies you add willy nilly and whether they add to the application or whether they just add unnecessary weight to it.

Follow standards regarding dependencies - Gemfiles for Ruby, requirements.txt files for Python and Package.json files for Node.  Think about version numbers - should they be fixed at the start or allowed to get updated as the project ages?  Test coverage comes in handy again here - if it's complete then upping the version of a dependency to avoid a security issue is much less stressful if the tests prove the app works just as before after the upgrade.


Code Reviews
------------

After completing a task, seek out a colleague who will be able to understand the code you've written in order to get them to review it with you.  They'll take a look at the changes you've made, and the approach taken.  A second pair of eyes might be able to spot things you missed.  They might also question why things were done a certain way.  It's not to be picky or derogatory, as they know you'll be reviewing their code some time; it's just a way to make sure everything gets done well.  Plus, if you know someone else is going to be looking at your code right away then you'll be much more inclined to lay it all out with other developers in mind!


Sign Off
--------

Who decides that a task has been completed satisfactorily to the intended specification?  In the agile world the person who owns the product and the backlog of features to be added to it should be the one to give your work the thumbs up.  That means a demonstration should be given by you - either on your system or in a demo environment, with the outcome being that after the go-ahead you can merge your new feature in with the rest of the developments waiting for the next release before they go live.


Release
-------

Everything that has been signed-off since the last release is brought into the master branch and deployed into a staging (pre-production) environment.  This allows everyone to see all the new features working together in a production-like environment before a final QA assessment means that deployment to production can go ahead.  Releases are scheduled during sprint planning.  They are not scheduled for Friday afternoons or for other awkward times!



