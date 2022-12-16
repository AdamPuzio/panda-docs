---
title: Installation
tags: installation
author: AdamPuzio
parent: Concepts
nav_order: 1
source: 
---
# Installation

There are multiple ways to install or run Panda depending on what you are looking to do. 

## Option 1: Quick & Easy

Want to take Panda for a test drive? You can create a new web app simply by running the following in your console:

```bash
npx create-panda-app new-app
cd new-app
npm start
```

Your new application has now started and should immediately open in your browser. If not, you can manually go to [http://localhost:5000](http://localhost:5000). You're all set to begin developing!

> What did this do?

`npx create-panda-app <app-name>` uses NPM's new NPX command to dynamically run the `create-panda-app` application which, as the name suggests, creates a new Panda application. This uses built-in scaffolds to build your app. It includes the ability to build from numerous templates or run in interactive mode, but by default it just creates a basic web app. 

You can learn more about the `create-panda-app` script [here](https://github.com/AdamPuzio/create-panda-app).

## Option 2: Global Install

If you're looking for a little more customizability, you're going to want to install the CLI tool:

```bash
npm i -g get-panda
```

Once you've installed it, you now have access to the `panda` command locally on your machine. 

```bash
# check the version
panda -v

# get a list of commands
panda
```

Once Panda is successfully installed, you can start using the CLI to create things:

```bash
panda project:create
cd new-project
panda project:start
```

You've now got a Project set up and ready to go. It will include both a `package.json` and `project.json`.

You can learn more about the `get-panda` script [here](https://github.com/AdamPuzio/panda-cli).

## Option 3: Manual Install

Installing Panda manually requires 2 steps: installing the package and configuring it.

Installing it into your project is as easy as:

```bash
npm i panda
```