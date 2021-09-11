<p align='center'>
  <a href="https://mike.works" target='_blank'>
    <img height=40 src='https://assets.mike.works/img/login_logo-33a9e523d451fb0d902f73d5452d4a0b.png' />
  </a> 
</p>
<p align='center'>
  <a href="https://mike.works/course/sass-fundamentals-5438fec/stage/sass-fundamentals-ca61dca" target='_blank'>
    <img height=150 src='https://cloud.githubusercontent.com/assets/558005/26024624/70ade15a-37d5-11e7-9e65-aa7b696cbaa0.png' />
  </a>
</p>

<p align='center'>
  <a href="https://travis-ci.org/mike-works/sass-fundamentals" title="Build Status">
    <img title="Build Status" src="https://travis-ci.org/mike-works/sass-fundamentals.svg"/>
  </a>
  <a href="https://github.com/mike-works/sass-fundamentals/releases" title="Version">
    <img title="Version" src="https://img.shields.io/github/tag/mike-works/sass-fundamentals.svg" />
  </a>
</p>
<p align='center'>
This is the  project used for the <a title="Mike.Works" href="https://mike.works">Mike.Works</a> <a title="Sass Fundamentals" href="https://mike.works/course/sass-fundamentals-5438fec/stage/sass-fundamentals-ca61dca">Sass Fundamentals</a> course.
</p>

# Course outline and slides
* [View course outline here](https://mike.works/course/sass-fundamentals-5438fec/stage/sass-fundamentals-ca61dca)
* [View slides here](https://docs.mike.works/sass-fundamentals)

# What are the pieces?

* [node-sass-middleware](https://github.com/sass/node-sass-middleware) for Sass compilation
* [express](http://expressjs.com/) for serving HTML and CSS (compiled from Sass)
* [commander](https://github.com/tj/commander.js) as a foundation for a CLI to run exerises
* [A little CSS testing framework](https://github.com/mike-works/sass-fundamentals/blob/master/public/js/tester.js) for asserting that exercise goals have been reached!

# Getting Set Up

There are a few things you need to ensure you have installed, in order to be ready for this course.

### Node.js

You’ll need a relatively recent version (v4.5 or newer, v7 ideally) of node.js installed. On OS X, a great way of doing this without disturbing your existing dev environment is to install NVM. [Installation instructions are here](https://github.com/creationix/nvm#installation).

You’ll know everything is set up properly when you can run

```
nvm --version # might look like "0.31.4"
node --version # might look like "v7.7.3"
```

### Visual Studio Code

Particularly if you’ve never tried it before, you should install [Microsoft Visual Studio Code](https://code.visualstudio.com/). Some fantastic extensions that I use regularly include
* [css-triggers](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.csstriggers)
* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
* [Sublime Text Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings) - Install if you’re used to sublime text keyboard shortcuts

### Check out and setup the project for this workshop

```
git clone git@github.com:mike-works/sass-fundamentals.git
cd sass-fundamentals
npm install
```


# How to use it
Use the `run` command to launch an exercise

```sh
./run --exercise <exercise name>
```

# License
While the general license for this project is the BSD 3-clause, the exercises
themselves are proprietary and are licensed on a per-individual basis, usually
as a result of purchasing a ticket to a public workshop, being a participant
in a private training, or having a Front End Masters membership.

Here are some guidelines for things that are **OK** and **NOT OK**, based on our
understanding of how these licenses work:

### OK
* Using everything in this project other than the exercises (or accompanying tests) 
to build a project used for your own free or commercial training material
* Copying code from build scripts, configuration files, tests and development 
harnesses that are not part of the exercises specifically, for your own projects
* As an owner of an individual license, using code from tests, exercises, or
exercise solutions for your own non-training-related project.

### NOT OK (without express written consent)
* Using this project, or any subset of 
exercises contained within this project to run your own workshops
* Writing a book that uses the code for these exercises
* Recording a screencast that contains one or more of this project's exercises 


# Copyright

&copy; 2018 [Mike.Works](https://mike.works), All Rights Reserved

###### This material may not be used for workshops, training, or any other form of instructing or teaching developers, without express written consent
