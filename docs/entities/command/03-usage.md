---
---
# Usage

## Properties

```
name: string
command?: string
description?: string
version?: string
arguments?: CommandArgumentProps | CommandArgumentProps[]
options?: CommandOptionProps[]
flags?: CommandFlagProps[]
prompts?: CommandPromptProps[]
subcommands?: 
  Array<CommandProps | Command | typeof Command> 
  | {[key:string]: CommandProps | Command | typeof Command}
```

### `name`

See [Properties.name](./properties/name) for more information

### `command`

### `arguments`

See [Properties.arguments](./properties/arguments) for more information

### `subcommands`
