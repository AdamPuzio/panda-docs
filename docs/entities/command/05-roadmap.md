# Roadmap

## Potential Features

Let us know what features you'd like to see in future releases.

### Chainable Properties

The ability to create a new Command in a chainable format, similar to how [CommanderJS](https://www.npmjs.com/package/commander) works:

```js
import { ChainCommand } from '@panda/command'

const cmd = new ChainCommand()
cmd.command('foo:create')
  .name('foo-create')
  .action()
```

### Create via Definition

The ability to create a new Command via a definition object:

```js
import { Command } from '@panda/command'

const cmd = new Command(`
This is a basic command

Usage:
  basic-cmd [name] [OPTIONS]

Arguments:
  name                                  The name of the thing

Options:
  --log-level <level>                   Set the log level
  --log-format <log-format>             Set the logging output format
  --file <file...>                      The file(s) to read
  --debug                               Run debug mode
  -v, --version                         Show version
`)
```

### Command Center

A central hub that acts as the container for a set of Commands, often as a full CLI:

```js
import { CommandCenter } from '@panda/command'
import { createProject, readProject, updateProject, deleteProject } from './commands'

const MyCLI = new CommandCenter({
  name: 'project',
  commands: [
    createProject,
    readProject,
    updateProject,
    deleteProject
  ]
})
```