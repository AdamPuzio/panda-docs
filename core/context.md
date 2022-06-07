---
title: Context
tags: core context
author: AdamPuzio
parent: Core
nav_order: 1
source: 
---
# Context

Panda likes to know where it is, so to make sure it always has an understanding of its surroundings, we've created the context module, or `Core.ctx`. This will give you - and Panda - a set of variables and methods to make contextual tasks simple. 

## Context Variables

## Context Methods

### Confirm Location 

There are 2 types of location methods:
* confirmIn
* confirmNotIn 

These, combined with the project/library validations, form a batch of methods that can be used to ensure the cwd is a valid location. 

## Context Command

Want to see exactly what Panda sees about the current context? Run `panda ctx` and you'll get a full dump of the context variables used. 