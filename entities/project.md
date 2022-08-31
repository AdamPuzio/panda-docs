---
title: Projects
tags: project
author: AdamPuzio
nav_order: 6
parent: Entities
source: 
---
# Projects

```js
const Panda = require('panda')
const Project = Panda.entity('project')

module.exports = new Project({
  load: `\${ctx.PROJECT_PATH}/project.json`
})
```

Apps
Services
Packages
