---
title: Terminal
tags: core terminal logging
author: AdamPuzio
parent: Core
nav_order: 5
source: 
---
# Wasp

## Usage

```js
'use strict'

const { Terminal } = require('panda')

module.exports = new Terminal.Command({
  options: [],
  action: async function (opts) {
    this.debug('command: foo')

    this.heading('Running Foo Command:')

    // check to make sure we are in a Project directory
    await this.confirmInProject()

    this.info('we are in a project')
  }
})

```

## Methods

### Location Methods

There are a few specific methods that can be called to test out the current working directory location. These are convenience methods that simply reference the same named functions in `Panda.Context`, but then handle the error exit the session.

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

// tests to make sure the cwd isn't in a Project, Panda, or PandaDev
this.locationTest(['notInProject', 'notInPanda', 'notInPandaDev'])

// confirm the cwd is a Project directory
this.confirmInProject()
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