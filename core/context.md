---
title: Context
tags: core context
author: AdamPuzio
parent: Core
nav_order: 1
source: 
---
# Context

Panda likes to know where it is, so to make sure it always has an understanding of its surroundings, we've created the context module, or `Panda.Context`. This will give you - and Panda - a set of variables and methods to make contextual tasks simple. 

## Context Variables

`Panda.ctx` provides a bunch of variables that can be useful when needing to know the currentcontext, as well as the path and version of libraries.

### Location

```
ctx.inPanda:               false
ctx.inProject:             true
ctx.inPackage:             false
ctx.inPrivateLabel:        false
```

### Path

```
ctx.PANDA_PATH:            /path/to/cwd/projects/test/node_modules/panda
ctx.PROJECT_PATH:          /path/to/cwd/projects/test
ctx.PACKAGE_PATH:          null
ctx.PRIVATE_LABEL_PATH:    /path/to/cwd/projects/test/node_modules/panda
ctx.PACKAGES_PATH:         /path/to/cwd/projects/test/node_modules
```

## Context Methods

### Confirm Location 

There are 2 types of location methods:
* confirmIn
* confirmNotIn 

These, combined with the project/library validations, form a batch of methods that can be used to ensure the cwd is a valid location. 

For example:

```js
const { Context } = require('panda')

// this will confirm we are in the root directory of a Project
// the default behavior is to throw an error and exit if it doesn't meet the criteria
await Context.confirmInProject()
```

## Context Command

Want to see exactly what Panda sees about the current context? Run `panda ctx` and you'll get a full dump of the context variables used. 

```bash
$ panda ctx
CONTEXT:

ctx.cwd:                     /path/to/cwd/projects/test
ctx.context:                 inProject

Location:
  ctx.inPanda:               false
  ctx.inProject:             true
  ctx.inPackage:             false
  ctx.inPrivateLabel:        false

Path:
  ctx.PANDA_PATH:            /path/to/cwd/projects/test/node_modules/panda
  ctx.PROJECT_PATH:          /path/to/cwd/projects/test
  ctx.PACKAGE_PATH:          null
  ctx.PRIVATE_LABEL_PATH:    /path/to/cwd/projects/test/node_modules/panda
  ctx.PACKAGES_PATH:         /path/to/cwd/projects/test/node_modules

Version:
  ctx.PANDA_VERSION:         0.5.4
  ctx.PROJECT_VERSION:       1.0.0
  ctx.PACKAGE_VERSION:       null
  ctx.PRIVATE_LABEL_VERSION: 0.5.4

Private Label:
  ctx.label:                 panda
  ctx.labelInfo:
    name                     panda
    version                  0.6.0
    panda                    {}

Other Variables:
  ctx._envPaths:             panda=/path/to/cwd/projects/test/node_modules/panda;
```