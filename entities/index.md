---
title: Entities
tags: 
author: AdamPuzio
nav_order: 4
has_children: true
source: 
---
# Entities

Panda uses the concept of _entities_, which are the building blocks of your applications. Below is a list of the base entities that can be created out-of-the-box:

| entity                     | default    | description |
| -------------------------- | ---------- | ----------- |
| [application](application) | koa        | Running applications |
| [command](command)         | panda      | Commands that can be run in a terminal |
| [component](component)     | panda      | Configurable UI components |
| [model](model)             | none       | Classes or models for your logic layers |
| [package](package)         | panda      | Panda plug-ins for adding features and functionality |
| [project](project)         | panda      | A deployable and runnable Project that contains all types of entities |
| [route](route)             | koa-router | Web application routing/controllers |
| [scaffold](scaffold)       | panda      | Scaffolding system to easily create other entities |
| [service](service)         | moleculer  | Services that can be run internally or externally |
| [static](static)           | koa-static | Static directories that will return its contents |
| [view](view)               | ejs        | Basic templates for rendering dynamic content |

All of the base entities are available immediately to implement and even scaffold. Prefer express over koa? Want to use mustache instead of ejs? Don't worry, you can use your favorite technologies instead. We've just packaged up our favorites to start. 

## Entity Usage

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

## Creating a New Entity Type

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
