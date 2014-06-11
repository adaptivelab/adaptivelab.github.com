---
layout: page
title: "Environments"
---
{% include JB/setup %}

Here, the environments we're talking about are those that your code is running inside of.  Different environments usually involve different config variables, pointing your development and test setup at different resources from the full production environment.  A simple example would be merely pointing to a database with -test or -development appended to the name, but in practise it covers all sorts of resources, from log file names to third party APIs.

Like unit testing, coding for environments should be done right from the start - not as something retro-fitted after development is complete.  When making API calls, keeping secret passwords, storing and relying on data in a database - anything like that requires that you separate out what happens in production from what happens during development and testing.  Think about naming conventions; for example, if you're using an Amazon S3 bucket, if you want to be able to use it while you develop then you'll need to use a different bucket to the one being used in the currently-running live environment.  And you'll probably want to mock it out completely when running your test suite.  It doesn't matter if the code you're working on isn't yet released into a production environment - as soon as it is you'll have a problem if you haven't coded for environments from the start.

At Adaptive Lab we make use of five different environments, each described in detail below.  It may sound a lot, but it covers all eventualities and splitting code out for two different environments involves a similar amount of work as for five, so there should be no problem adding environments as and when they're needed.


The Five Environments
---------------------

Here they are in all their glory.  Bear in mind that there may be multiple deployments of any of the environments.  For example, you might run tests locally in the test environment, while Jenkins is also running in his own test environment.  Or there might be two demo releases running different features currently being worked on.

### 1. Development

The one you start out in, that you can mess about in and that you can get complete debugging information from.  It should be as close to the production environment as is sensible.  If we're using Postgres in production, you should ideally be using Postgres in development.

Third party APIs should be used sparingly in this environment - if the third party has a sandbox API for development then that should be what's configured to run.  You should definitely think twice before allowing production credentials into this environment.

### 2. Test

The environment all tests are run in.  Each test should create its own data for testing, which should get torn down again straight after.

There should be no third party calls made in this environment - credentials should be set up with dummy information that gets used within tests, but mocks will allow you to fake the results as you'd expect to see them so that tests can be run stand-alone.

### 3. Demo

Might never get used for some projects, but is a handy environment to have for demoing features as they're being worked on.  The demo environment behaves more like the staging or production environment, but could potentially include more debugging information available.

The demo environment should have some data that makes it look and feel more like the production environment.  To be effective, it may be necessary for apps running in this environment to get hold of regular updates of data so they look good enough for sign-off.

### 4. Staging

The final step before release.  The staging environment should look exactly like production, allowing for accurate visual confirmation that everything is working before running that final deploy.

The staging environment should hold data that's as close as possible to the production system and it should also match the hardware setup, meaning it can be used for performance testing - hammering the system in a repeatable and automated way until it cannee cope any more.

### 5. Production

The live system.  It should have minimal logging information (enough so that you have a view on what's going on and what's going wrong) and everything turned on (caching, third party APIs).

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
