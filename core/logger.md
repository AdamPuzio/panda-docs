---
title: Logger
tags: core logging
author: AdamPuzio
parent: Core
nav_order: 4
source: 
---
# Logging

## Creating a Logger

```js
const Logger = Panda.Logger

// get the base logger
const logger = Logger.getLogger()

// initialize a new custom logger
const logger = Logger.getLogger('Foo')
```

## Logging 

```js
logger.fatal(msg)
logger.error(msg)
logger.warn(msg)
logger.http(msg)
logger.info(msg)
logger.verbose(msg)
logger.debug(msg)
logger.silly(msg)
logger.success(msg)
```

## Setting Log Level & Format at Runtime

```bash
# run the start command with debug on (set to debug level)
panda project:start --debug

# run the ctx command with log level set to silly
panda ctx --log-level silly

# run the web app in CLI format
panda run web --log-format cli 
```

### Log Levels

* fatal
* error
* warn
* http
* info
* verbose
* debug
* silly

### Log Formats

* simple - generic output
* json - JSON formatted output
* basic - `timestamp label level message` output
* standard - production level formatted output
* cli - pretty-print viewable output

## Functionality

### Logger Class

```js
Logger.getLogger('Foo')
Logger.setFormat('standard')

// apply a completely custom format
const winston = require('winston')
const { combine, splat, timestamp, label, printf } = winston.format
Logger.setFormat(printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
}))

// applies logger functions (e.g. this.debug()) to provided scope
Logger.generateLoggerFns(this)
```

### Logger Instance

`logger.test(level, levelAt)`

`logger.log(level, msg)`

`logger.out(msg, opts={})`

`logger.style(styles)`

## Tests

### test:logging

```bash
$ panda test:logging --log-level silly --log-format cli

Test Logger Levels:

ℹ Log Levels: fatal | error | warn | http | info | verbose | debug | silly

✖ log level test for: fatal
✖ log level test for: error
⚠ log level test for: warn
⚠ log level test for: http
ℹ log level test for: info
› log level test for: verbose
․ log level test for: debug
․ log level test for: silly
```