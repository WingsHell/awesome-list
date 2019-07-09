![Travis (.org) branch](https://img.shields.io/travis/WingsHell/awesome-list/master.svg?label=TravisCI&logo=travis&style=plastic)
![CircleCI](https://img.shields.io/circleci/build/gh/WingsHell/awesome-list/master.svg?label=CircleCI&logo=CircleCI&style=plastic)
![npm](https://img.shields.io/npm/v/@angular/cli.svg?color=%234c1&label=npm%20package&logo=npm&style=plastic)
![Codacy grade](https://img.shields.io/codacy/grade/c39efc40abd0469f856a4efcfc4efe95.svg?color=%234c1&label=Codacy%20Grade&logo=codacy&style=plastic)
![License][license-image]

# awesome-list

tuto awesome-list / Angular 8+ / Angular Matérial / API REST

https://awesome-angular.com/2019/04/10/angular-homepage/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

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

## Outils de CI

* TravisCI
> [TravisCI](https://travis-ci.org/WingsHell/awesome-list)

-----------------

* CircleCI
> [CircleCI](https://circleci.com/dashboard)

-----------------

* Codacy
> [Codacy](https://app.codacy.com/projects)

-----------------

* Badges
> [Codacy](https://shields.io/)

-----------------

## Conf
* karma.conf.js :
`

    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

-----------------

* e2e/pratactor-ci.conf.js :
`

    const config = require('./protractor.conf').config;

    config.capabilities = {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--no-sandbox', '--disable-gpu']
      }
    };

    exports.config = config;

-----------------

* .circleci/config.yml :
`

    version: 2
    jobs:
      build:
        working_directory: ~/awesome-list
        docker:
          - image: circleci/node:10-browsers
        steps:
          - checkout
          - restore_cache:
              key: awesome-list-{{ .Branch }}-{{ checksum "package-lock.json" }}
          - run: npm install
          - save_cache:
              key: awesome-list-{{ .Branch }}-{{ checksum "package-lock.json" }}
              paths:
                - "node_modules"
          - run: npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
          - run: npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js

-----------------

* .travis.yml :
`

    dist: trusty
    sudo: false

    language: node_js
    node_js:
      - "10"

    addons:
      apt:
        sources:
          - google-chrome
        packages:
          - google-chrome-stable

    cache:
      directories:
        - ./node_modules

    install:
      - npm install

    script:
      - npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
      - npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
