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

## Getting Started

### Dependencies

The only dependency for Panda is NodeJS version 14 or greater. That's it. Panda should work on MacOS, Windows and Linux.

## Installation

The easiest way to install Panda is to run the following in your terminal:

```bash
npx create-panda-app new-app
cd new-app
npm start
```

Your application has now started and should immediately open in your browser. If not, you can manually go to [http://localhost:5000](http://localhost:5000)


If you want to install Panda either globally or manually, or you want more information on installation and setup, visit the [Installation page](concepts/installation)

For more information on creating or editing a Project, visit the [Project Setup](concepts/project-setup)

## Now What?

Build. Your project will contain a number of examples on how to create and configure many of the different entities that exist in Panda.

## Building Blocks

Panda projects are made up of a number of different entities:

- [Apps](entities/application)
- [Commands](entities/command)
- [Components](entities/component)
- [Packages](entities/package)
- [Projects](entities/project)
- [Routes](entities/route)
- [Scaffolds](entities/scaffold)
- [Services](entities/service)
- [Static Directories](entities/static)
- [Views](entities/view)

Developing with these building blocks is super easy. For most entities, creating a new one is as simple as including that entity from Panda and instantiating it.

```js
const { Command, Router, Service, Scaffold } = require('panda')
// create a new Command
const pandaCommand = new Command({})
// create a new Router
const pandaRouter = new Router()
// create a new Service called sample
const pandaService = new Service('sample', {})
// create a new Scaffold
const pandaScaffold = new Scaffold({})
```

If you want to go meta, you can even create new entity types

```js
const { Entity } = require('panda')

class PandaThing extends Entity {
  static type = 'thing'
  static filePattern = '/**/thing.ext'

  static async registerItem (buildObj, entity, pkg) {
    ...
  }
}

module.exports = PandaThing
```

## Help

## via create-panda-app command

To see a list of potential parameters you can apply, run:

```bash
npx create-panda-app --help
```

## via panda command

To see a list of all the commands available to you via the Panda CLI, run:

```bash
panda
```

If you want information about a particular command, run that command with the `--help` flag:

```bash
panda project:create --help
```

## Topics

* [Terminology](terminology)
* Core
  * [Context](core/context)
  * [Factory](core/factory)
  * [Hub](core/hub)
  * [Logger](core/logger)
  * [Terminal](core/terminal)
  * [Utility](core/utility)