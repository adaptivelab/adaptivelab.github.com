---
layout: page
title: "Testing"
description: ""
---
{% include JB/setup %}

Every new bit of code you write should be proved to be doing the job you wanted it to in some sort of repeatable, automated test.  If it's not tested then it won't go in!  Before finishing any new feature, make sure to run the full test suite so you can be sure nothing you've done has broken any existing functionality.



Avoid Brittleness
-----------------

Tests are 'brittle' when they work fine for the moment, but when you make the next change to the code or add the next feature, they break because of the way that a bunch of assumptions were baked into them that were unrelated to the code under test.  With a bit of forethought, it's possible to re-write a test so it's a valid test for some specific code, but it won't break if other parts of the application change.

Factories and Fixtures
----------------------

Factories are a very useful way to set up a blueprint for models and data structures that represent examples of them in different forms.  They allow you or a fellow colleague when coming to write a new test, to be able to build and create instantiations of those models without having to go through the rigmarole of knowing how to fill them with enough information and in the right format for them to be considered valid.

>We use third party libraries like [factory_girl](https://github.com/thoughtbot/factory_girl) for Ruby and [factory_boy](https://github.com/dnerdy/factory_boy) for Python to provide a consistent syntax for the creation and use of factories.  But even just a reusable function is better than nothing.

If your suite starts out with a large setup method that fills out a model with all the data it needs for the tests to run, consider replacing that with a factory in a commonly accessible location that any test can import and use.  The same goes for fixtures of information that represent examples of data the system might expect to see - rather than building them inline into your tests, it's much more reusable to factor them out into their own module for inclusion into other tests.  It helps keeps things neat and tidy too.


Mocking
-------

There are good and bad sides to mocking.  On the plus side, they enable you to forget about dependencies that are hard to set up or are expensive to use (complicated databases, third party APIs and the like) and focus on just what it is you're trying to test.  On the negative side, if you happen to mock a function where the interface to that function later changes, your tests might still pass happily but your feature could fail in the real world.  Be careful to avoid traps laid by overzealous mocking, usually by visually testing everything you add in a development, demo or staging environment that is much closer to the real world.

Mocks can help speed up tests.  If you don't have to initialize a database, fill it full of relevant data and tear that down after every test then your suite is going to run faster.

>We use standard mocking libraries like [mocha](https://github.com/freerange/mocha) for Ruby and [fudge](http://farmdev.com/projects/fudge/) for Python.


The Time Taken for Tests to Run
-----

The time an entire test suite takes to run is a consideration that you may want to take into account when it comes to writing new tests that you know will take a while.  When the entire test suite runs in an acceptably fast time (a subjective amount), then the overall speed at which you can iterate and develop a new feature is unhindered.  If however the test suite takes a few minutes too long then you're less likely to run it before committing your changes in, leaving the door open for regression errors.

Speed is worth thinking about - it may make you decide to use mocks instead of a real database for a simple test, for example.  But it's not usually worth spending too much time over.  With Jenkins, even if the test suite takes hours, you'll get an answer about the health of the code eventually, although if tests fail after that then the turnaround time becomes a huge issue!  The thing with tests though is that they're rarely removed, so for a long-running project, the suite is only going to get slower and slower.


Jenkins
---------

We use [Jenkins](http://jenkins-ci.org/) as our continuous integration server.  He sits there waiting for any code changes before he goes and runs all of the tests to give the green light on new releases.

### Add new projects to Jenkins from the start

When a new repo is created, add it to Jenkins.  We track the master and develop branches so that we can see the whole picture on development before knowing for certain that the code is at least ready for a release.

It doesn't matter if there are no tests or if it's not set up right.  As soon as it's in there, everyone can have visibility that these things need to be done.

<!-- ### How to add a new repo or branch to Jenkins

TODO: Explain how to add to the jenkins templates
 TODO: Explain jenkins.sh -->

### Add your feature branch if development is long-running

For big features, it can help for Jenkins to track the feature branch and show the status of all its tests.  It's easy to do and provides visibility to everyone immediately.

<div class="dotted-rule">
</div>
<section class='text-block'>
  <div class='footer'>
    <a href='/contact'>
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
