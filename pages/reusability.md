---
layout: page
title: "Reusability"
description: ""
---
{% include JB/setup %}

Don't Repeat Yourself
---------------------

DRY is a common term in software development now.  It makes good sense.  Refactor as you go so that you're not just copy/pasting code around the place.  It will make the code much easier to read and to modify, for you and for those that come after you.

In practise it means that even if your code is split across repositories, if the work you're doing has to be duplicated elsewhere, then you need to stop and find a way to make that code more re-usable.

This goes for your tests too.  Use factory methods and fixtures and take the time to put them in the most sensible place so that others can come along later and re-use them in their tests.  They'll do the same for you, so it's win-win.


Open Source Stuff!
----------------

If you've got a piece of self-contained, useful code, why not package it up into a library and release it as open source via your favourite open source channel?  You can easily create a new public repository to house it, you can test the bejeesus out of it over time so you know that wherever you stick it it's just going to work and you never know - a stranger might come along one day and send you a pull request that makes it even better!

Sure, it will take a little while getting used to packaging it up the first couple of times, but the more often you do it, the easier it will become.  The first time you'll have done all the hard work, including choosing the right licensing agreement to suit, so that the subsequent times will be a breeze.

