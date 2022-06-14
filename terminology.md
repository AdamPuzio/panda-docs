---
title: Terminology
tags: 
author: AdamPuzio
nav_order: 2
has_children: true
source: 
---
# Terminology

* [Project](#project)
* [Application](#application)
* [Service](#service)
* [Package](#package)
* [Route](#route)
* [Model](#model)
* [View](#view)
* [Component](#component)


## Project

A Project is a bundled repository of code and configuration that contains everything needed to be run. 

## Application

Applications are running, protocol-based servers mounted on top of Services. Applications can be regular web servers, APIs, Headless apps, or anything you can imagine and build. 

Apps can be built using the library of your choice. The base Panda web app is built using Koa, while the API app uses Moleculer. 

To learn more about Applications, visit the [Applications page](entities/application)

## Service

At its core, Panda uses a microservices-based approach to building and scaling your logic. Services, therefore, are the primary method for creating that logic. 

Since Services can be run independently on distributed networks, there is power in creating your Apps and Projects in a way that leverages Services heavily. 

To learn more about Services, visit the [Services page](entities/service)

## Package

Packages in Panda are essentially plug-ins. They act as independent bundles of code that can contain their own Apps, Services, Routes, Components, etc. This allows them to be easily installed and configured into your Project and managed as any other NPM library. 

To learn more about Packages, visit the [Packages page](entities/package)

## Route

Routes (or controllers) contain the routing information used by the different Applications in Panda.

To learn more about Routes, visit the [Routes page](entities/route)

## Model

Models are independent, logic-based classes. They can be used any way you'd like: as datastore models (think Mongoose), Singleton or instance classes, utility functions, or any other format you'd like. 

To learn more about Models, visit the [Models page](entities/model)

## View

Views are simple renderable templates used to display output from Applications. Generally, they render HTML, but they can be used to output any format desired. 

Panda's default web app uses EJS as its templating engine, but any templating engine can be incorporated and used.

To learn more about Views, visit the [Views page](entities/view)

## Component

Components are portable templates. They are similar to Views, but also contain forms and configuration information that are used by content management systems to provide a better way to set them up using an interface. 

To learn more about Components, visit the [Components page](entities/component)