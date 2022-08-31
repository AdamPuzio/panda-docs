---
title: Introduction
tags: 
author: AdamPuzio
nav_order: 1
source: 
---
# Introduction to Panda

Panda is a rapid application development framework and toolkit. The goal is to provide developers with the tools and processes to quickly and easily create applications that are flexible, scalable, fast and fun to develop. 

> NOTE: Panda is currently in __Alpha__ development phase. All code, including Project builds, are considered highly volatile and WILL change frequently.

## Topics

* [Terminology](terminology)
* Core
  * [Context](core/context)
  * [Factory](core/factory)
  * [Hub](core/hub)
  * [Logger](core/logger)
  * [Terminal](core/terminal)
  * [Utility](core/utility)

## Getting Started

### Dependencies

The only dependency for Panda is NodeJS version 14 or greater. That's it. Panda should work on MacOS, Windows and Linux.

### Global Installation

New to Panda? The best place to start is by building a new Project for yourself and playing around. First, you'll need to install the Panda CLI globally:

```bash
npm i -g panda-cli
```

Run `panda -v` to check the version or `panda` to see the list of available commands to run.

For more information on installation and setup, visit the [Installation page](concepts/installation)

### Creating a Project

Once you've got the CLI installed, navigate to a directory where you'd like to create your new Project and run the `project:create` command:

```bash
cd /path/to/dir
panda project:create
```
The Panda CLI will ask you a series of questions about what kind of application you'd like to build and how you'd like it set up. Once you've answered all the questions, your Project will be automatically built and configured for you. From there, you can either start it with the `panda project:start` command if you set up a Project with existing content, or begin building.

For more information on creating a Project, visit the [Project Setup](concepts/project-setup)

## Help

To see a list of all the commands available to you via the Panda CLI, run:

```bash
panda
```

If you want information about a particular command, run that command with the `--help` flag:

```bash
panda project:create --help
```