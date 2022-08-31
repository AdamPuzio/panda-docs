---
title: Utility
tags: core utility
author: AdamPuzio
parent: Core
nav_order: 6
source: 
---
# Utility

The `Panda.Utility` class is a set of stateless utility and convenience functions used throughout the system. 

## Methods

### Naming Methods

There are several utility functions used to adapt variable values to fit a specific use case, such as slugifying a readable word (e.g. Base Config > base-config). 

```js
const Utility = Panda.Utility

let v = 'bEcOmEs ThIs'

Utility.slugify (v) // becomes-this 
Utility.nameify (v) // Becomes This 
Utility.camelify (v) // becomesThis 
Utility.pascalify (v) // BecomesThis 
Utility.snakeify (v) // becomes_this 
Utility.envify (v) // BECOMES_THIS}
```