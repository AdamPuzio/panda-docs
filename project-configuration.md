---
title: Project Configuration
tags: config
author: AdamPuzio
nav_order: 3
source: 
---
# Project Configuration

Every Project contains a base configuration, which is universal across environments, as well as one or more local configs that provide context to the specific environment that Project is being run in. 

## Base Config

The base/global config contains all of the information relevant to your Project, regardless of where or how it's run. It is located in the `project.json` file at the base of your Project directory.

Within the base config is all of the Apps and Services that are available to be run (along with their individual configuration), the locations of static, view, route and component directories, and a list of installed Packages, their configurations and any imported Apps/Services/Routes/etc they provide.

You can view the contents of your base config at any time by running the `project:details` command from within your Project directory. This retrieves and displays the same data as is used by Panda when setting up and running your Project. 