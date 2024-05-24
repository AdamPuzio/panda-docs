---
title: subcommands
sidebar_position: 10
tags: [Command, Command Properties]
---

# `subcommands`

Commands have the ability to contain subcommands. This allows you to bundle commands together into a CLI package, while still creating each as its own command. 

> Note: Currently, `arguments` and `subcommands` are not compatible. If you plan to use `subcommands`, create your arguments as `options` instead.

## Usage

### Format

The `subcommands` property can be either an array or an object with the key being the subcommand's command. If provided as an array, the subcommand's command will be inferred from the instance itself.

### Accepted Types

Subcommands can be added in one of 3 ways:

- Instance - an instantiated instance of `Command`, `Scaffold` or other class
- Class - an uninstantiated instance of `Command`, `Scaffold` or other class
- Object - an object to be instantiated as a `Command`

```js
const subcommandInstance = new Command({
  name: 'subcommand-instance'
})

class subcommandClass extends Command {
  name = 'subcommand-class'
}

const subcommandObject = {
  name: 'subcommand-object'
}
```