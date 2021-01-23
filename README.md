# @ngnz  🚀 

> Useful and powerful tool to build Enterprise Mobile Cross Platform Application with Angular, React, Javascript ES6 or any simple website using HTML with Javascript. 

## Content

**Library**
- [@ngnz/copy-to-clipboard](libs/copy-to-clipboard/README.md) - ✂️ Copy content text to clopboard + display alert to confirme.
  - ✅ ES6 function
  - ✅ Angular Directive
  - [ ] Web Component

- [@ngnz/dayjs](libs/dayjs/README.md) - ⏰ Immutable Date-Time utils.
  - ✅ ES6 function
  - ✅ Angular Pipe
  - [ ] Web Component

## Development
Here tips and shortcut to build and developpe more features using Angular Schematics.
### Commandes
- generate:
  - buildable lib: `$ nx g @nrwl/web:library <lib_name> --buildable`
  - publishable lib: `$ nx g @nrwl/angular:library <lib_name> --publishable --importPath=@ngnz/<lib_name>`
  - angular: `nx g <type> <name> --project=<project_name>`
- build 
  - app: `$ nx build <app_name> --prod`
  - libs: `$ nx build <lib_name> --with-deps --prod`
- publish
  - libs: `$ nx build <lib_name> --with-deps --prod && cd dist/libs/<lib_name> && npm publish && cd ../../..`


### Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Contribution
Feel free to contrib.

- clone/fork project
- $ git checkout -b YOUR_BRANCH
- do your work...
- pass test...
- pull request with your branch on the dev branch / or submit small fix on the master branch.
I will merge it and upd project version soon as possible.

## About author
Hi, i'm a Senior Typescript Software Architect & teacher, living in Geneva Switzerland 🇨🇭  and i build software architecture and cross platform application for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website https://nicolasfazio.ch