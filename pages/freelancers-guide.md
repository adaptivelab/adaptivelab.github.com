---
layout: page
title: "Working with Adaptive Lab for Fun and Profit"
---
{% include JB/setup %}

<ol class="Ordered-list--wide">
    <li>
        <div class="Ordered-list--context">
            <div>
                <h2 class="List-item__heading">{{ page.title }}</h2>
<div class="List-item__body" markdown="1">
This is a brief description of the minimum requirements of our way of working together. These apply to everyone we work with, whether they’re freelance or permanent. We regard some of these as ‘must haves’, and some are just ‘nice to have’: it should be clear which is which but, if in doubt, do ask. We’ve also included some links in this document to places where you can read in more detail about certain topics. Those are just there for your interest: this document contains all the key things.
</div>
            </div>
        </div>
    </li>
</ol>

<dl class="Accordion--top">

    <dt class="Accordion__element__title">If you're a developer: your code</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
* It must be easy for us to get your code up and running, using only the ReadMe (and/or any other documentation). We use Vagrant for this, and it’d be great if you did too.
* You must write tests which we can run, covering ≥70% of the code. If you can’t work out how to test something, talk to us and we’ll see if we can help. If you really can’t test it, document it. [Here’s some more of our thoughts on testing.](/pages/testing.html)
* Follow the appropriate style for the language and framework you’re using – for example, your Python should follow [PEP8](http://www.python.org/dev/peps/pep-0008/). [Here are some other ways we ensure code quality.](/pages/ensuring-quality.html)
* Write documentation that contains, at the very least:
    - Instructions on how to get the app running
    - An overview of the function of the app that’s understandable by a non-developer

* Other nice-to-have in docs include:
    - System diagrams if the system is complex
    - The rationale behind major decisions
    - A list of known issues that haven’t yet been resolved.
</div>
    </dd>

    <dt class="Accordion__element__title">If you’re a designer: your designs</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
* We must be able to easily access the final designs in a non-Creative-Suite format (image files or pdf)
* We must also be able to access the editable versions of your designs.
* Your designs should specify the dimensions of different elements and the width of padding; the hexes for colours; and the typefaces and font sizes.
* You should provide us with image assets in a web-optimised format.
* If you’re designing something with user interactions, we’ll need designs that clearly show each state, and (as relevant) the transitions between them, plus some documentation explaining the interactions, so everything’s crystal clear.
* It's also important to specify which elements of the page are links, and where they go.
</div>
    </dd>

    <dt class="Accordion__element__title">Your way of working</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
* Follow the process we agree on, which will usually be very close to the one described on our [project management pages](/pages/project-management.html). The really key bits are:
    - Track your progress in Asana in the same way as the rest of the team
    - Get your stories signed off
    - If you’re a developer, do code reviews for every non-trivial feature
    - Give us daily updates via an in-person stand-up, or over Skype, or via email/<a href="https://idonethis.com">IDoneThis</a>

* If you're a developer: use Git and [GitFlow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/), and commit regularly with useful commit messages. [Here’s more information on how we use Git](/pages/using-git.html).
</div>
    </dd>

    <dt class="Accordion__element__title">Communication</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
* Have at least one near-instant contact method during your working hours, like the phone or chat (we use [HipChat](http://www.hipchat.com)), for when we need to talk to you about something urgent (not so we can bug you every 5 minutes).
* Get in touch pro-actively to let us know about obstacles, or things you’re struggling with. We might be able to help!
* You need to let us know when work is over-running the estimates we made together, or there are extra things you think need to be done. This isn’t so we can berate you, but so we can agree on the best way  to respond.
</div>
    </dd>

    <dt class="Accordion__element__title">When &amp; where</dt>
    <dd class="Accordion__element__content">
<div markdown="1">
* You don’t need to work 9 to 5, but we do need to know in advance which days and times you’ll be working.
* We also need to know roughly how many hours you’ll be working in your normal working day/week (and when you’re working many more or fewer hours than normal), so we can budget accurately.
* We may want to agree a few ‘core hours’ where both us and you are at work and contactable.
* We prefer you to be co-located with us, or at least come to our office for project kick-offs. We have a nice office, with plenty of space, wifi and nice people to have a beer with on Friday. If co-location isn’t possible, we can work around it, but this may factor in to our decision over whether to work with you or someone else.
</div>
    </dd>
</dl>

{% include want-to-know-more.html %}