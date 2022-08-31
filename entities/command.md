---
title: Commands
tags: command
author: AdamPuzio
nav_order: 2
parent: Terminology
source: 
---
# Commands

## Setup

### Scaffolding Setup

If you want to quickly scaffold a Command, it's as simple as running the following:

```bash
panda command:create
```

or to create a subcommand to an existing Command, run:

```bash
panda subcommand:create
```

### Manual Setup

When creating a new Command manually, there are a couple different ways to do it:

```js
const { Terminal } = require('panda')

const command = new Terminal.Command({
  ...
})

// OR 

const Panda = require('panda')
const Command = Panda.entity('command')

const command = new Command({
  ...
})
```

## Configuration

| key         | type     | description |
| ----------- | -------- | ----------- |
| name        | string   | the actual command to be run (minus the parent command) |
| description | string   | a brief description to display on `--help` |
| hidden      | boolean  | if true, do not show command info on `--help` |
| arguments   | array    | a list of arguments that can be passed |
| options     | array    | a list of options the command accepts |
| action      | function | the function to run when the command is executed |

## Examples

```js
const { Terminal } = require('panda')

module.exports = new Terminal.Command({
  command: 'test:logging',
  description: 'Run logging tests',
  options: [],
  action: async function (opts) {
    this.debug('command: test:logging')

    this.heading('Test Logger Levels:')

    const levels = Object.keys(this.logger.levels)
    this.info(`Log Levels: ${levels.join(' | ')}`)
    this.spacer()
    levels.forEach((k) => {
      this[k](`log level test for: ${k}`)
    })
  }
})

```

```js
// $ foo bar --test-me

const { Terminal } = require('panda')

module.exports = new Terminal.Command({
  command: 'foo',
  description: 'Foo command',
  arguments: [
    {
      name: 'command',
      subcommand: true
    }
  ],
  options: [
    {
      name: 'test-me',
      type: Boolean
    }
  ],
  subcommands: {
    bar: {
      description: 'Bar subcommand'
      // default location is in ./foo-bar
      file: './'
    }
  },
  action: async function (opts) {
    this.debug('command: test:logging')

    this.info(``)
  }
})

```