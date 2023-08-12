# ObservableDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Server side code
The server side code can be cloned from:  https://github.com/inov8design-3813ict/observables-demo-server.git

clone the repo and run "npm install" to grab the required dependencies.
The server will run on http://localhost:3000

## Features of Observables Demo
- Login Page - username/password (Check server code route->api-login.js for valid values)

- Homepage  - contains two sub components (List and Details)

- Homepage is protected from view via a Guard on the route that prevents the component from loadng unless there is a "currentuser" stored in session Storage. (This will change once we start using MongoDB)
- Observables used to update data in Master/Detail pattern.

