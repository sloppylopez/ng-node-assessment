# NgClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Architecture of the project

This project is reading a dummy JSON from disk using [json server](https://github.com/typicode/json-server)
we display the data using an Angular 9 application.

The front-end does not communicate directly with the json-server backend, as instead there is a middleware
using node and express [middleware](https://github.com/typicode/json-server) to separate the logic between them
so when the backend changes we don't need to change the calls to the backend, this is a commonly used pattern 
in front-end.

The Angular client is using Material UI.

Regarding the minification of the code, Angular is already doing the minification of resounces when we do:
`ng run start:prod`

## To run the project

`git clone https://github.com/sloppylopez/ng-node-assessment`

`cd json-server`

`npm i`

`npm start`

on a different terminal

`cd ng-client`

`npm i`

`npm run start:api`

`npm start`

## To run with minified code

`npm run start:prod`

http://localhost:4200

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
