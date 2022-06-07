---
title: Wasp
tags: core wasp logging
author: AdamPuzio
parent: Core
nav_order: 5
source: 
---
# Wasp

## Usage

```js
'use strict'

const Core = require('panda-core')
const Wasp = Core.Wasp
const program = new Wasp.ScaffoldCommand()

program
.description('Create a new Thing')
.argument('[name]')
.option('--name', 'The name of the Thing')
.action(async function(name, opts, cmd) {
  this.debug(`command: thing:create`)

  // check to make sure we are NOT in a Project, Panda, PandaCore or PandaDev directory
  await this.locationTest(['notInProject', 'notInPanda', 'notInPandaCore', 'notInPandaDev'])
  
  await this.parseScaffold('thing', { interactiveMode: !name, mapping: { name } })
  .then(() => { this.success('Thing successfully created') })
  .catch((err) => {
    this.exitError(err, 'Thing creation failed')
  })
})
.parse(process.argv)
```

## Methods

### Location Methods

There are a few specific methods that can be called to test out the current working directory location. These are convenience methods that simply reference the same named functions in `Core.ctx`, but then handle the error exit the session.

Currently, the only option is `onFail`, which tells the system what to do on failure. 

* `locationTest(locRef, opts)` - test a location for a number of different scenarios
* `confirmInPanda(opts)` - confirms the cwd IS in the Panda library
* `confirmNotInPanda(opts)` - confirmas the cwd IS NOT in the Panda library
* `confirmInPandaCore(opts)` - confirms the cwd IS in the PandaCore library
* `confirmNotInPandaCore(opts)` - confirmas the cwd IS NOT in the PandaCore library
* `confirmInPandaDev(opts)` - confirms the cwd IS in the PandaDev library
* `confirmNotInPandaDev(opts)` - confirmas the cwd IS NOT in the PandaDev library
* `confirmInProject(opts)` - confirms the cwd IS in a Project directory
* `confirmNotInProject(opts)` - confirmas the cwd IS NOT in a Project directory
* `confirmInPackage(opts)` - confirms the cwd IS in a Package directory
* `confirmNotInPackage(opts)` - confirmas the cwd IS NOT in a Package directory
* `confirmInPrivateLabel(opts)` - confirms the cwd IS in a Private Label library
* `confirmNotInPrivateLabel(opts)` - confirmas the cwd IS NOT in a Private Label library

```js
const Core = require('panda-core')
const Wasp = Core.Wasp

// tests to make sure the cwd isn't in a Project, Panda, or PandaDev
Wasp.locationTest(['notInProject', 'notInPanda', 'notInPandaDev'])

// confirm the cwd is a Project directory
Wasp.confirmInProject()
```

### Logging Methods

* `spacer ()` - output a new line
* `clear ()` - clears the console
* `out (msg, opts)` -  outputs a message, with optional styling and level testing
* `exitError (err, msg)` - throw a friendly error message, with optional debug logging
* `test (level, levelAt)` - test a specific log level
* `style (styles)` - apply a style (or set of styles) to text
* `table (val)` - build a table ready for output
* `tableOut (val, level)` -  build and output a table
* `heading (msg, opts)` - output a styled heading message