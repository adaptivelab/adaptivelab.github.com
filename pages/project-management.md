---
layout: page
title: "Project Management"
description: ""
---
{% include JB/setup %}


We stick pretty firmly to the Agile SCRUM software development methodology.  I won't go into great detail about what that means, but here's the way we work:

## Fortnightly process

### Sprints

We work in a series of two-week 'sprints'. Each of these is a block of time dedicated to working on a set of tasks laid out at the beginning that won't change in the middle. Each sprint starts with planning and estimation, has a stand-up every day during the sprint, and finishes with demos and a retrospective.


### Planning

Good planning takes time. Sorry bosses, but it has to be that way or the actual sprint will suffer. During planning, bite-sized tasks are pulled out of a backlog of features, refined until everyone understands what it's about, estimated and added to the sprint. All the developers working on that product and the product owner do this together. We aim to come up with a realistic list of goals that we hope to achieve by the end of the sprint, and a prioritised list of tasks (or 'stories') that enable us to reach those goals, with a clear deliverable for each task.


### Estimations

The whole team are involved in estimating each task.  This way, the experience of many are used to cover all bases - the established team members know about legacy code in the application and the new team members might bring new ways to solve a certain problem.  A consensus is agreed upon that is realistic, which is vital for understanding what's possible to achieve during a sprint.  With each sprint down, the estimations of individual tasks and the backlog features overall get more and more accurate, especially if the team is made up of the same developers each time.

### Daily stand-up

We hold a daily stand-up meeting at 10am.  It should last no longer than 10 minutes, involves the whole team and everyone has to tell the others:

* What they did yesterday
* What they're working on today
* Any blockers they might have

It's not a way to keep tabs on people and know whether they're skiving off or not!  The main reasons to have it are so that the team has a good understanding of where everyone is at and what it is we're all working on.  More importantly is the result that blockers are caught early on and help given (in whatever the best form for that is), which will be arranged for a time after the meeting.

>*Don't be late for standup!*


### Demos

It's important during planning to define what the team expects to see as deliverables at the end of the sprint.  These are the tangible end results of your hard work, which you then get to demo to the whole team at the end of a successful iteration. Demos are usually around 5 minutes each.

Make sure to get ready for a demo before you give the demo.  The law of Sod indicates that your demo will not go well and will take ages of everyone's time if you don't have it ready.


### Retrospective

It's important to spend a little time looking back at each sprint, to work out what went well and what needs fixing in our process. We discuss all of this in a regular retrospective meeting involving the whole team. This is a great way to make sure that we're always thinking about how we can improve our process, and we fix problems with it early.

## Day-to-day process

This isn't set in stone by any means, but here's how we generally approach our work during a sprint.

### 1. Pick up a new task to work on

All the tasks we decided on in planning are kept in [Asana](https://app.asana.com/). Asana keeps a record of all the information about individual tasks, and also what people have been working on and what stage each task is at. We also use a [Kanban board](http://en.wikipedia.org/wiki/Kanban_board), because it gives a really helpful at-a-glance view of what's going on in the iteration.

Tasks are listed in the relevant project in priority order. But do take a pragmatic approach to deciding what the next task you do is, depending on whether you're waiting for other tasks to get done beforehand.

When you need something to do, just grab the next available task you can work on from the Asana that corresponds to the current sprint, by assigning it to yourself and moving it into the 'In Progress' part of the project.  While you're at it, move the corresponding card on the Kanban board along too.

### 2. Talk to the product owner

Even if you think you know exactly what you're about to attempt when grabbing a new task off the pile, it's always a good idea to double-check with whoever created the task in the first place that you'll be delivering what's expected.

### 3. Talk to the dev team

Talk through the technical approach with others in the team.  Even if you think there's a clear, simple method to take it's still worth double-checking with others as everyone has different experience and knowledge that may lead to something better or simpler.  Doing this also helps to ensure there's not some other work going on that would impact on your ability to carry out the task.

### 4. Create a new feature branch in git flow

We use git-flow to manage our versioning. [Find out more about how we use git flow](/pages/using-git.html)

### 5. Start working away

Hack away to your heart's content. (After you created automated tests that prove it all works, of course.) When you think the feature's done, keep it in its branch for now while you do the following checks.

### 6. Get the task signed off

Move the Asana story to "waiting for sign off" and move the card on the Kanban board to this heading too. Then get the Product Owner to take a look at a working example so they can give you the thumbs up. They might need to check with other people before signing off (like a client); it's their responsibility to do this and let you know when the feature is signed off.  The working example can be given on your local development machine, theirs perhaps, or a demo server running on Heroku or EC2.  Whatever fits best with the feature in question and the circumstances. 

### 7. Get your work code reviewed

Snag a nearby colleague who has some sort of understanding of the code you've just produced so that they can go over it from a coder's point of view and pass you helpful suggestions or point out important details you may have missed.  A handy way to do this is to get them to look at a pull request via Github, as it enables them add comments inline that get recorded for posterity.  Just as valid a way is to take them through your additions yourself.  Listen to their comments.  Don't be defensive - they're only talking frankly about good coding practices!  Also, don't forget you'll be giving your opinions on their code shortly too.

### 8. Check it's ok to deploy to production immediately

Even after being signed off and code-reviewed, your feature might not be ok to be deployed to production. Ideally, every story in the iteration should be able to be deployed as soon as it's signed off; waiting at this stage can cause all sorts of nasty problems when you try to merge and deploy.

If it looks like you'll need this delay for a particular feature, use your best judgement and discuss with the team what to do. You might build that feature so it's backwards compatible; you might start with a task to build a demo version of that feature on a demo branch, then once that's been signed off have another task to make the live version. Or other options.

### 9. Finish feature and merge into develop

Once you've got an ok from the last three steps, you get to use git-flow again to finish off the feature branch, merging it back into develop and deleting it locally as it's no longer needed.  Try not to forget to delete the remote version too, if you happened to create one.  Git flow won't do that for you.

Move the Asana story to "waiting for deploy" and move the card on the Kanban board to the "waiting for deploy" section, so everyone can easily see which tasks are sitting in develop, ready for deployment.

### 10. Deploy

[Find out how we do deployment](/pages/release-and-deployment.html)


## Working on a Brand New Project

The process above works for on-going projects. There's a bunch of setup stuff involved in setting up a new project.  Typically these bits will be:

1. Create projects in Asana and for the backlog and first sprint.  The Product Owner will do all that in collaboration with developers.  They will include setup tasks in the first sprint.

2. Create a github repo for it.

3. Initialise the repo for Git Flow.  Push the newly created develop branch up to github.

4. Add the project to Jenkins so that continuous integration is setup from the start.  There's a simple way to do this where all projects are built in the same way, from a jenkins.sh file in the root directory of each project.

5. Create a Vagrantfile and associated provisioning steps for development on a local VM (or multiple VMs to represent multiple servers).  The best way to do this is to re-use the setup from the latest, most-relevant project.

The provisioning steps will grow as dependencies and configuration gets added to the project.  They will eventually be used to provision the production servers too, so avoid any steps that are too specific to your local VM setup.

6. Create a Fabric fabfile with the necessary commands defined for common tasks like 'test', 'deploy', 'run'.  They're somewhat project-specific, but look to other projects for examples.

7. Create any other files and directories required by the particular language or framework being used for this project.  For example, a requirements.txt file for listing Python dependencies, or a Gemfile for listing ruby dependencies, that sort of thing.  Very project-specific.


## One more thing about Asana: github Hook

Once you've set it up right, if you add a '#' and then the number of an Asana task ID to one of your git commits, when pushed up to github Asana will add a commit message into your task.  Handy!

<!-- TODO: How to set it up right. -->
