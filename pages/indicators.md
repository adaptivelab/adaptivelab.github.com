---
layout: page
title: "Indicators"
description: ""
---
{% include JB/setup %}

Taking the time up front to install some analytics for your application pays off later on.  Building up a picture of the usage of your app over time gives you the information you need to iterate and improve without guesswork.  Adding in monitoring and logging information will enable the prevention of a disaster or if it comes to it, to know what happened when your app goes wrong!


Analytics
---------

For web projects, [Google Analytics](http://www.google.co.uk/analytics/) is an obvious, free and easy way to start tracking usage of your app.  There are plenty of libraries out there for simplified addition of the analytics tracking code or it's very easy to explicitly add the code to your templates yourself, so there's no reason not to add it early on and start recording data.


### Configuring Analytics and Environments

As laid out in the [guide on multiple environments](/pages/environments.html), set up different tracking codes for production than for other environments.  That way you can happily click on your newly tracked features in development and you'll be able to see the results clearly on your separate test analytics account the next day, without all the noise of the rest of the world getting in the way.  As an extra bonus it means you won't have to remove demo/staging traffic from your statistics.


### Track Everything!

Don't forget how to set up tracking for ajax calls and other actions that aren't a simple page view.  It's easy to do and as always, the earlier you do it the more data you'll gather.


### Content Experiments

For front-end applications, it makes good sense to back up theories about changes to the layout and design with solid facts.  Experiments allow you try that version 2 idea at the same time as keeping version 1 up and running, so you can gather the statistics on whether it actually meets the goal you set for it or not.  Keep the experiments simple, in order to make the end results crystal clear.

> In an ideal world, your app will always have at least one content experiment running.  That means you're constantly tweaking the site, getting closer and closer to perfection.


Monitoring
-----------

In production, make sure the server it's running on is being monitored, at least for the basics:

* CPU usage
* Memory usage
* Disk usage
* That the processes you expect to be up are up
* That there are no processes that shouldn't be there (zombies for example)


Logging
-------

Logging is a boring necessity that you'll regret if you don't get it right early on.  Use a standard logging framework and make sure to use log levels correctly - DEBUG should be for debug messages, INFO should be for general information and ERROR should be for errors!

If your app is set up to log to the standard output streams then you can decide where to redirect that to at a later date, rather than hard-code in a particular logfile name and location.


