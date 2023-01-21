---
title: Introduction
tags: 
author: AdamPuzio
nav_order: 1
source: 
---
# Introduction to Panda

Panda is a rapid application development framework and toolkit. The goal is to provide developers with the tools and processes to quickly and easily create applications that are flexible, scalable, fast and fun to develop. 

> NOTE: Panda is currently in __Alpha__ development phase. All code, including Project builds, are considered highly volatile and WILL change frequently.

## Why Panda?

Panda is 3 things: a framework, a toolkit, and an approach to development. It can be used as the foundational library behind your next mega-project or it can be used in pieces to enhance an existing code base. You choose how much - or how little - you want Panda in your project. 

> What can I build with Panda?

Pretty much anything. Want a web app? _Done_. An API? _Easy_. A CLI? _Child's play_. How about a private labeled project that includes 2 web apps, a headless API, a static file server AND a CLI tool to help you build things within your project that is also ready to be run locally and deployed to a remote Kubernetes cluster? _Panda has you covered_.

> Will I have to adapt to a bunch of new libraries and web technology?

Nope. The goal of Panda is to allow you bring whatever libraries you want. Panda provides some of its own favorites if you don't have a preference or want it out-of-the-box, but it aims to be technology-agnostic. We all have favorites. Now you can easily bring yours together. 

> Is Panda quick to get setup?

As quick as it takes you to run `npx create-panda-app new-app` in your terminal. That creates a branch new project ready to be run on your local machine. We couldn't think of a way to make it any easier than that. 

> Is this a prototyping tool or can a Panda project be run in a production environment?

Panda allows you to do it all, from project creation to production deployment & orchestration. The design behind how different entities are connected and run allows for unlimited application and service scaling that can be easily orchestrated to any custom build. Panda uses a microservice design and overlays its applications to achieve this. 

## Philosophy

> Development should be FUN

Spend more time building and being creative and less time managing and maintaining your applications and infrastructure

> Development should be SIMPLE

Panda bundles common development tools into a simple and intuitive platform that makes it easy to scaffold, run and deploy your apps

> Development should be FLEXIBLE

Bring your own technology to the party and build your project how _you_ want to build it

## Getting Started

There are many ways to get started with Panda (see the [installation page](concepts/installation) for more info on all the ways). Below we'll show you the quickest way to get going. 

### Dependencies

_The only dependency for Panda is NodeJS version 14 or greater_. That's it. Panda should work seamlessly on MacOS, Linux and Windows.

### Installation

The easiest way to install Panda is to run the following in your terminal:

```bash
npx create-panda-app new-app
cd new-app
npm start
```

Your application has now started and should immediately open in your browser. If not, you can manually go to [http://localhost:5000](http://localhost:5000)


If you want to install Panda either globally or manually, or you want more information on installation and setup, visit the [Installation page](concepts/installation)

For more information on creating or editing a Project, visit the [Project Setup](concepts/project-setup)

### Now What?

Build. Your project will contain a number of examples on how to create and configure many of the different entities that exist in Panda.

## Features & Concepts

### Building Blocks

Panda projects are made up of a number of different building blocks, called _entities_:

- [Apps](entities/application)
- [Commands](entities/command)
- [Components](entities/component)
- [Models](entities/model)
- [Packages](entities/package)
- [Projects](entities/project)
- [Routes](entities/route)
- [Scaffolds](entities/scaffold)
- [Services](entities/service)
- [Static Directories](entities/static)
- [Views](entities/view)

> Visit the [entities](entities) page for an overview of all entities, as well as examples of how to use and build them. 

### Microservice Design

When used properly, the microservices design pattern is a really clean and effective way to build things. Under the hood, Panda uses an amazing microservices framework, called [Moleculer](https://moleculer.services/), as the engine that runs your projects. 

Why does this matter? Because it allows a project to be created as a self-contained codebase that can be deployed and distributed to an unlimited number of configurations. That means it can scale as large as you want it to, while also running like a lightweight monolith app on your local machine. 

## Help

### via create-panda-app command

To see a list of potential parameters you can apply, run:

```bash
npx create-panda-app --help
```

### via panda command

To see a list of all the commands available to you via the Panda CLI, run:

```bash
panda
```

If you want information about a particular command, run that command with the `--help` flag:

```bash
panda project:create --help
```

> NOTE: in order to run the `panda` command, you must have the full CLI installed

## Topics

* [Terminology](terminology)
* Core
  * [Context](core/context)
  * [Factory](core/factory)
  * [Hub](core/hub)
  * [Logger](core/logger)
  * [Terminal](core/terminal)
  * [Utility](core/utility)