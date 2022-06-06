---
title: terminology
tags: 
author: AdamPuzio
source: 
---
# Terminology

* Project
* Application
* Service
* Package
* Route
* Model
* View
* Component


## Project

A Project is a bundled repository of code and configuration that contains everything needed to be run. 

## Application

Applications are running, protocol-based servers mounted on top of Services. Applications can be regular web servers, APIs, Headless apps, or anything you can imagine and build. 

Apps can be built using the library of your choice. The base Panda web app is built using Koa, while the API app uses Moleculer. 

## Service

At its core, Panda uses a microservices-based approach to building and scaling your logic. Services, therefore, are the primary method for creating that logic. 

Since Services can be run independently on distributed networks, there is power in creating your Apps and Projects in a way that leverages Services heavily. 

## Package

Packages in Panda are essentially plug-ins. They act as independent bundles of code that can contain their own Apps, Services, Routes, Components, etc. This allows them to be easily installed and configured into your Project and managed as any other NPM library. 

## Route

Routes (or controllers) contain the routing information used by the different Applications in Panda.

## Model

Models are independent, logic-based classes. They can be used any way you'd like: as datastore models (think Mongoose), Singleton or instance classes, utility functions, or any other format you'd like. 

## View

Views are simple renderable templates used to display output from Applications. Generally, they render HTML, but they can be used to output any format desired. 

Panda's default web app uses EJS as its templating engine, but any templating engine can be incorporated and used.

## Component

Components are portable templates. They are similar to Views, but also contain forms and configuration information that are used by content management systems to provide a better way to set them up using an interface. 