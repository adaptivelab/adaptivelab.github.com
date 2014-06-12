---
layout: page
title: "Release and Deployment"
---
{% include JB/setup %}

<ol class="Ordered-list--wide">
    <li>
        <div class="Ordered-list--context Ordered-list--manual-number">
            <span class="Ordered-list--number">8</span>
            <div>
                <h2 class="List-item__heading">{{ page.title }}</h2>
<div class="List-item__body" markdown="1">
Releases are scheduled during [sprint planning](/pages/project-management.html#planning).  Normally pencilled in for the end of a sprint, they can be set mid-sprint to give flexibility for specific deliverables.
</div>
            </div>
        </div>
    </li>
</ol>

<dl class="Accordion--top">

    <dt class="Accordion__element__title">Who is Responsible for What?</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
If you've been working on a feature during the current sprint, once you've had it [reviewed by a colleague](/pages/ensuring-quality.html#code_reviews) and [signed-off](/pages/ensuring-quality.html#sign_off) as ready then you should [merge it into the current develop branch](/pages/using-git.html#git_flow) before the release is prepared.

Once your feature has been merged into the [develop branch](/pages/using-git.html#git_flow) you should then update the [The Changelog](#the_changelog) to contain a one line description of your newly merged in but unreleased feature. This allows the person who will be doing the release later to know exactly what they are releasing. You should add this one line description under the ``Unreleased`` section of the [The Changelog](#the_changelog), for example:

    Changelog
    ---------

    Unreleased
      Fixed issue with the users view

    v0.5.0:
      Added full name field for users.  Note: *requires db migration*.
      Implemented the new designs for the sign-in form.

This unreleased section will then be renamed during the release to the release version number.

Then it's the job of one person in the team to create and deploy the release.  That person is arbitrarily nominated - eventually it will be you!
</div>
    </dd>

    <dt class="Accordion__element__title">Creating the Release</dt>
    <dd class="Accordion__element__content Accordion__element__content--nested">
<div markdown="1">
Creation of a new release is done [using Git Flow](/pages/using-git.html#git_flow).  Essentially all it does is to merge the current develop branch into master and then tag the code at that specific point. This documents changes to the code and enables easy rollback later if need be.
</div>
        <dl class="Accordion--nested">
            <dt class="Accordion__element__title">Versioning</dt>
            <dd class="Accordion__element__content">
<div markdown="1">
We use major.minor.patch version numbering to 'bump' the releases.  For example:

| Example | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| v0.0.1  | The first release                                                     |
| v0.0.2  | A minor change to fix that release, e.g. a config variable was missed |
| v0.1.0  | A new feature was introduced                                          |
| v1.0.0  | A new feature was introduced that brought about a fundamental change in the app.  Usually meaning that any API this app provides is now broken for clients expecting it to work in the old way. |

This version is set during the git flow release process:

    >git flow release start v0.0.1

The changelog is then updated with a high-level description of the changes, before finishing the release with Git Flow.
</div>
            </dd>

            <dt class="Accordion__element__title">The Changelog</dt>
            <dd class="Accordion__element__content">
<div markdown="1">
Every repository will have a README or a readme or a changelog of some sort that the person creating the new release will add information to about the new changes brought in.  The documentation should be clearly understandable by any reader and should develop in order of newest changes at the top.  Something like:

    Changelog
    ---------

    Unreleased

    v0.5.0:
      Added full name field for users.  Note: *requires db migration*.
      Implemented the new designs for the sign-in form.

    v0.4.0:
      Added the sign-in form.
</div>
            </dd>
        </dl>
    </dd>

    <dt class="Accordion__element__title">Release to Staging First</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
It is definitely prudent to release production-ready code to a pre-production or [staging environment](/pages/environments.html#4_staging) first, to ensure that whatever the changes are doing, they happen without any nasty surprises.  This way you might see issues with your db migrations or with updates to third-party libraries when the code is deployed, before the users do.
</div>
    </dd>

    <dt class="Accordion__element__title">One-command Releasing</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
Often, a release involves a set of procedures - updating code, migrating a db, creating a few symlinks, etc.  The list of procedures grows and changes as each project grows over time.  To avoid complications, every project makes use of deployment wrappers like [Fabric](http://docs.fabfile.org/en/1.5/) or [Capistrano](https://github.com/capistrano/capistrano).  These allow the configuration and arbitrary procedures to be managed centrally, with a common deployment pattern, making it possible for any developer to be able to deploy code competently.
</div>
    </dd>

    <dt class="Accordion__element__title">The Release Checklist</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
1. The features have been signed off.
1. The features have been merged to develop.
1. The tests are all green.
1. The release has been created.
1. The release has been tested in the staging environment.
</div>
    </dd>
</dl>

{% include want-to-know-more.html %}
