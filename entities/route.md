---
title: Routes
tags: route
author: AdamPuzio
nav_order: 7
parent: Terminology
source: 
---
# Routes

Routing is handled in Panda by Route files, created (by default) in the `app/routes` directory of your Project. 

For the Web App, Routes are created using the Koa-style routes:

```js
const Panda = require('panda')
const Router = Panda.Router
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world'
})

module.exports = router
```

### Directory Structure

Route filenames mean nothing. Route directory names, on the other hand, ARE meaningful. Here are a few examples:

```bash
/app/routes
  # all routes contained in index.js and main.js will be base routes (/)
  /index.js 
  /main.js
  /foo
    # all routes in index.js, foo.js and another-file.js will all be prefaced with /foo
    /index.js
    /foo.js
    /another-file.js
    /bar
      # all routes in index.js and bar.js will be prefaced with /foo/bar
      /index.js
      /bar.js
```

## CLI

### panda route.create

The simplest way to create a Route is by using the `panda route:create` command from the CLI. This will walk you through a few questions and will generate a pre-built Route file for you. 

