---
title: Installation
tags: 
author: AdamPuzio
parent: Concepts
nav_order: 1
source: 
---
# Installation

## Standard Install

The best way to install Panda is by globally installing the CLI tool:

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

## Manual Install

Installing Panda manually requires 2 steps: installing the package and configuring it.

Installing it into your project is as easy as:

```bash
npm install panda
```