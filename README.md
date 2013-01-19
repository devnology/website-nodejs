Devnology website
=================

A new version of the Devnology website.

## Getting started
To get your development environment up and running you need to install the following applications:

* [Node.JS](http://nodejs.org)
* [MongoDB](http://www.mongodb.org/)

### Initialize
The application has a few Node.js dependencies: Express and Jade. To install all dependencies just run:

    npm install

### Run
The application can be started by running the following command:

    node app

## Directory structure
For this project we use the following directory structure:

    controllers/			-- modules with controllers and views
      event/
      ..
    lib/					-- node.js libraries
    models/					-- models for mongo
    public/					-- front-end assets
      css/					-- custom stylesheets
      img/					-- all images
      lib/					-- external front-end libraries
        bootstrap/
        jquery/
        ..
    views/					-- static views, like an about page