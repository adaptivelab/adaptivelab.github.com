---
layout: page
title: "Security"
description: ""
---
{% include JB/setup %}

All the code you write and all the data that gets generated as a result of real users using your app might someday be worth something to somebody, so you should protect it today!  Protection doesn't just come in the form of some fancy encryption algorithm - try and think about where your data goes in physical terms too.  If you're on a wireless network, someone could be snooping on all of the data being passed back and forth on it.  If you leave your laptop lying around, someone could swipe it.  If you host your applications in a data centre, someone could social-engineer their way through to your company's servers and do all kinds of bad.

Here's a few tips and examples on good practices for securing the fruits of your labours.


Be Wary of Clear Text
----------------------

Learn what it means to pass data around in 'clear text' and understand whether that's a security risk for you or not.  Passing sensitive information in clear text is wrong and should be swapped out immediately with a secure solution.  This usually means adding SSL certificates to web sites and redirecting from http to https versions of pages with forms on them, but also applies to working with APIs, databases and libraries that send and receive data between servers.


How to Store Secrets
--------------------

Secrets in this case refers to those bits of configuration - passwords, API keys, etc. that only your app needs to know about.  You need to store them somewhere because your application needs to know them (and your application lives on several servers).

What you shouldn't do is store them in a versioning system, like Git.  Even if you've got a private repository, you may eventually make it public, or you may forget to revoke read-access to it to an ex-employee or something might happen down the line where git's ability to never forget a repo's history will come back to bite you.  This also applies in the case where you were storing a password in a repo, you realised the error of your ways and removed it straight away - the history is not so easy to unpick, so that secret remains discoverable.

[Heroku](http://www.heroku.com/) has a good system for managing secrets and general application configuration, which is to have the app read everything it needs from environment variables, which only live on the servers they're needed on.  The setting of these is all managed centrally, setting up all nodes with the required info.

[Puppet](http://puppetlabs.com/), [SaltStack](http://www.saltstack.com/) et al similarly control configuration centrally, effectively relinquishing the required secret information to the nodes that need it, through a system of authentication.  There's still a need to have a backup of that secret information somewhere, in the event that the centrally managed store of info goes down and it needs to be reset.


Know Your Data Centre
---------------------

The safe and secure data centre that hosts your work also holds racks upon racks of servers for other companies and has fallable, unpredictable humans safe-guarding the process of getting at them.  Choose your data centre well.  Read up on their operation and look at what audits and accreditations they have.  Even so, encrypt your data and make sure your log on procedures are nice and secure.

We use Amazon's Web Services and Heroku for a lot of our hosting, which is mainly based on AWS too.  Amazon have a lot of [information on their security credentials](http://aws.amazon.com/security/) - it's their business to get this stuff right!


Know Where Your Laptop Is
-------------------------

Obviously you should keep your laptop safe and secure - lock it up at night or take it with you.  But also be aware of leaving it with your screen unlocked - if you're in a public place or somewhere you don't know everybody, you could leave it open to tampering.

At Adaptive Lab we use a thing called [Boxen](http://boxen.github.com/), by Github.  It allows us to set up new
laptops easily, with all the apps and settings you could want to have on day one of starting with us.  It also enables us to set settings like 'lock the screen after five minutes'.

We encrypt the hard drives of all our laptops, which means that if they do get stolen, the contents of them at least can't be read.


Password Policies and User Accounts
-----------------------------------

We have a ton of user accounts for all sorts of sites and services.  Some are individual, some should be owned by the company and in many cases we need a way to pass them around in case of illness or being hit by a proverbial bus.  So every time you create an account for something, even if it takes just seconds to sign up, you should think about the longer term management of that account and how that should be handled.

We use services like [Passpack](https://www.passpack.com/) that allow us to manage accounts and share them with the appropriate people.  Inside services like AWS, we can use their identity and access management systems - Amazon's is called [IAM](http://aws.amazon.com/documentation/iam/).  [Dropbox](https://www.dropbox.com/) allows us to manage who can see what files, both internal and external, as does [Google Drive](https://drive.google.com) and other similar services.  All of these allow us to implement a policy of least privilege - giving access individually only to the services and resources needed at the time.

Services like [Passpack](https://www.passpack.com/) and [1Password](https://agilebits.com/onepassword) allow us to use very complicated, large passwords, unique to each account, which makes them very secure.  Not even we can remember our passwords!

When the sad day arrives that someone leaves, it's a good idea to go through a checklist of tasks related to relinquishing access to all company-related accounts and services.  Something similar gets carried out at the end of individual projects, following that policy of least privilege.

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
