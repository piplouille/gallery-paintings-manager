# Consignes

Your web app will have to manage a gallery of paintings.

A Painting class will have the following properties:

name -> string
description -> string
year -> the year the painting was made
style -> baroque | impressionist | modernist
price -> number 
author_id -> number

The Author class will have the following properties:
id -> number
name -> string
birthdate -> string
bio -> string

All fields are required



1. ~~Create a new angular application 1p~~
2. ~~Create the classes for Painting and Author and add a json server with the endpoints: /paintings and /authors. Prefill them with some data 1p~~
3. ~~Your app will have 3 pages -> authors, paintings, statistics.
 Create the necessary components and services and add a navigation between them 1p~~
4. ~~List all the paintings inside the paintings page. Each painting should have a component 1p~~
5. List all the authors inside the authors page. When clicking on an author you will show in another page all the paintings by that author 1p
6. In the `painting add page` add a form with validation to add a paintings in the database. 
All fields are required, year has to be 4 chars long; use pattern validator with the pattern [0-9]{4} 1p 
7. In the `authors add page` add a form with validation to add a authors in the database. 1p
8. Replace the author_id text field with a select which is populated automatically from the author endpoint 1p
9. In painting component if painting has price greater than 1000 euros show in the page "Expensive" with green otherwise show "Cheap" with red 1p
10. In the statistics page show the following by each style (baroque, impresioninst, modernist): most expensive 3 paintings, oldest 3 paintings 1p

# Partiel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
