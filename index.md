---
title: Introduction
tags: 
author: AdamPuzio
nav_order: 1
source: 
---
# Introduction to Panda

Panda is a rapid application development framework and toolkit. The goal is to provide developers with the tools and processes to quickly and easily create applications that are flexible, scalable, fast and fun to develop. 

The model is simple: spend more time building and being creative and less time managing and maintaining your applications and instances. Panda bundles common development tools into a simple and intuitive platform that makes it easy to scaffold, run and deploy your apps. Focus less on app creation, scaffolding, deployments, testing, troubleshooting, monitoring and maintaning your apps, and focus more on building web pages, services, components, commands, models and plugins.

Panda uses the concept of _entities_, which are the building blocks of your applications. Below is a list of the base entities that can be created out-of-the-box:
| entity      | default    | description |
| ----------- | ---------- | ----------- |
| application | koa        | Running applications |
| command     | panda      | Commands that can be run in a terminal |
| component   | panda      | Configurable UI components |
| model       | none       | Classes or models for your logic layers |
| package     | panda      | Panda plug-ins for adding features and functionality |
| project     | panda      | A deployable and runnable Project that contains all types of entities |
| route       | koa-router | Web application routing/controllers |
| scaffold    | panda      | Scaffolding system to easily create other entities |
| service     | moleculer  | Services that can be run internally or externally |
| static      | koa-static | Static directories that will return its contents |
| view        | ejs        | Basic templates for rendering dynamic content |

All of the base entities are available immediately to implement and even scaffold. Prefer express over koa? Want to use mustache instead of ejs? Don't worry, you can use your favorite technologies instead. We've just packaged up our favorites to start. 

> NOTE: Panda is currently in __Alpha__ development phase. All code, including Project builds, are considered highly volatile and WILL change frequently.

## Getting Started

### Dependencies

*_The only dependency for Panda is NodeJS version 14 or greater_*. That's it. Panda should work on MacOS, Windows and Linux.

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

If you want to go meta, you can even create new entity types:

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

### via create-panda-app command

To see a list of potential parameters you can apply, run:

```bash
npx create-panda-app --help
```

### via panda command

To see a list of all the commands available to you via the Panda CLI, run:

```bash
panda
```

If you want information about a particular command, run that command with the `--help` flag:

```bash
panda project:create --help
```

> NOTE: in order to run the `panda` command, you must have the full CLI installed

## Topics

* [Terminology](terminology)
* Core
  * [Context](core/context)
  * [Factory](core/factory)
  * [Hub](core/hub)
  * [Logger](core/logger)
  * [Terminal](core/terminal)
  * [Utility](core/utility)