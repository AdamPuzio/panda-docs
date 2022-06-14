---
title: Logger
tags: core logging
author: AdamPuzio
parent: Core
nav_order: 3
source: 
---
# Logging

## Creating a Logger

```js
const Logger = PandaCore.Logger
const logger = Logger.getLogger()
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
```

## Setting Log Level & Format at Runtime

```bash
# run the start command with debug on (set to debug level)
panda start --debug

# run the web app in CLI format
panda run web --log-format cli 
```
