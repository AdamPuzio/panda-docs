---
title: Introduction to Panda
tags: 
author: AdamPuzio
source: 
---
# Introduction to Panda

Panda is a rapid application development framework and toolkit. The goal is to provide developers with the tools and processes to quickly and easily create applications that are flexible, scalable, fast and fun to develop. 

## Where to Start

New to Panda? The best place to start is by building a new Project for yourself and playing around. Navigate to a directory where you'd like to create your new Project and run the `project:create` command:

```bash
cd /path/to/dir
panda project:create
```
The Panda CLI will ask you a series of questions about what kind of application(s) you'd like to build and how you'd like it set up. Once you've answered all the questions, your Project will be automatically built and configured for you. From there, you can either start it with the `start` command if you set up a Project with existing content, or begin building.

## Topics

* [Terminology](terminology)
* [Project Configuration](project-configuration)
* Core
  * [Context](core/context)
  * [Factory](core/factory)
  * [Logger](core/logger)
  * [Utility](core/utility)
  * [Wasp](core/wasp)
