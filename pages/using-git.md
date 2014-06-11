---
layout: page
title: "Using Git"
---
{% include JB/setup %}

<ol class="Ordered-list--wide">
    <li>
        <div class="Ordered-list--context Ordered-list--manual-number">
            <span class="Ordered-list--number">4</span>
            <div>
                <h2 class="List-item__heading">{{ page.title }}</h2>
<div class="List-item__body" markdown="1">
We use git and GitHub for version control of our source code.
</div>
            </div>
        </div>
    </li>
</ol>

<dl class="Accordion--top">

    <dt class="Accordion__element__title">Git Flow</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
We use [git flow](https://github.com/nvie/gitflow) for managing our branches.  It's pretty simple once you get used to it.  We work from a branch called 'develop' and only merge changes in to master once they're ready for a new release.  We stick with the standard git flow branch names and have no restriction on feature names as yet, as long as they make sense to other readers.

> If you're new to git flow, this is [a good article to start from](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/).

Here's a quick example of how to work on a new feature of a new project using git flow:

Clone the repo:

{% highlight bash %}
$ git clone git@github.com:adaptivelab/adaptivelab.github.com.git
{% endhighlight %}

Initialize git flow, accepting all the defaults:

{% highlight bash %}
$ git flow init
{% endhighlight %}

Start work on your feature:

{% highlight bash %}
$ git flow feature start some_awesome_addition
{% endhighlight %}

Happily code away and then merge it back into develop once it's done:

{% highlight bash %}
$ git flow feature finish some_awesome_addition
{% endhighlight %}

> Don't forget to push your develop branch up to github, to help resolve any conflicts your code might have with others working on the same repo.

Git flow takes care of things like removal of local branches when they're no longer needed and tagging the code every time you make a new release.
</div>
    </dd>

    <dt class="Accordion__element__title">Commit Often</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
Since you're on your own branch, don't be afraid to commit as you go.  It won't hurt anyone and your own commit messages can help you work out where you left off last time you worked on this feature.  You can always tidy up a bunch of commits, squashing them with an interactive rebase to turn them into single, meaningful commits.

Push your branch up to github if you want to save it for working elsewhere or for another developer to take a look at.  Just don't forget to remove it once it has been merged, as that won't be done for you!
</div>
    </dd>

    <dt class="Accordion__element__title">Public vs Private</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
When you're creating a new repository, why not let it go public?  If it doesn't contain some super secret algorithmic sauce then there should be no problem letting the wider community see your work - it's going to be better than they can do and you know it!  Plus it's cheaper than hosting tons of private repos.
</div>
    </dd>

    <dt class="Accordion__element__title">Don't Check In Passwords!</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
We'll come back on to [security](/pages/security.html) later but for now just know that you shouldn't commit anything that should be considered secret.  That includes passwords, api keys and anything else that might be sensitive information.  It's not good enough to remove secrets after the fact either - git is designed to keep all changes historically and it's very difficult in practise to remove secrets from past commits.
</div>
    </dd>
</dl>

{% include want-to-know-more.html %}
