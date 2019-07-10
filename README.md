# awesome-list

tuto awesome-list / Angular 8+ / Angular Material / API REST

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

-----------------

## Badges

[![Travis (.org) branch](https://img.shields.io/travis/WingsHell/awesome-list/master.svg?label=TravisCI&logo=travis&style=plastic)](https://travis-ci.org/WingsHell/coverage-test)
[![CircleCI](https://img.shields.io/circleci/build/gh/WingsHell/awesome-list/master.svg?label=CircleCI&logo=CircleCI&style=plastic)](https://circleci.com/gh/WingsHell/awesome-list)
[![npm](https://img.shields.io/npm/v/@angular/cli.svg?color=%234c1&label=npm%20package&logo=npm&style=plastic)](https://badge.fury.io/js/%40angular%2Fcli)
![David](https://img.shields.io/david/WingsHell/awesome-list.svg?color=%234b1&style=plastic)

[![Codacy grade](https://img.shields.io/codacy/grade/c39efc40abd0469f856a4efcfc4efe95.svg?color=%234c1&label=Codacy%20Grade&logo=codacy&style=plastic)](https://www.codacy.com/app/WingsHell/awesome-list?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=WingsHell/awesome-list&amp;utm_campaign=Badge_Grade)
[![Coveralls github](https://img.shields.io/coveralls/github/WingsHell/awesome-list.svg?color=%234b1&label=Coveralls&style=plastic)](https://coveralls.io/github/WingsHell/awesome-list?branch=master)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/WingsHell/awesome-list.svg?color=%2345D298&logo=code%20climate&style=plastic)](https://codeclimate.com/github/WingsHell/awesome-list/maintainability)

[![GitHub](https://img.shields.io/github/license/WingsHell/awesome-list.svg?style=plastic)](https://www.gnu.org/licenses/gpl-3.0)

## Site tutorial

> [Awesome-Angular](https://awesome-angular.com/)

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

## Tools for Continuous Integration & Quality Code

* TravisCI
> [TravisCI](https://travis-ci.org/WingsHell/awesome-list)

-----------------

* CircleCI
> [CircleCI](https://circleci.com/dashboard)

-----------------

* Codacy
> [Codacy](https://app.codacy.com/projects)

-----------------

* Coveralls
> [Coveralls](https://coveralls.io/github/WingsHell/awesome-list)

-----------------

* Code Climate
> [Code Climate](https://codeclimate.com/github/WingsHell/awesome-list)

-----------------

* Badges
> [shields.io](https://shields.io/)

-----------------

## Configuration

`karma.conf.js :`

    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

-----------------

`e2e/pratactor-ci.conf.js :`

    const config = require('./protractor.conf').config;

    config.capabilities = {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--no-sandbox', '--disable-gpu']
      }
    };

    exports.config = config;

-----------------

`.circleci/config.yml :`

    version: 2
    jobs:
      # The build job
      build:
        working_directory: ~/awesome-list
        docker:
          - image: circleci/node:10-browsers
        steps:
          # Checkout the code from the branch into the working_directory
          - checkout
          # Log the current branch
          - run:
              name: Show current branch
              command: echo ${CIRCLE_BRANCH}
          # Restore local dependencies from cache
          - restore_cache:
              key: awesome-list-{{ .Branch }}-{{ checksum "package-lock.json" }}
          # Install project dependencies
          - run: npm install
          # Cache local dependencies if they don't exist
          - save_cache:
              key: awesome-list-{{ .Branch }}-{{ checksum "package-lock.json" }}
              paths:
                - "node_modules"
          # Lint the source code
          - run:
              name: Linting
              command: npm run lint
          # Test the source code
          - run:
              name: Testing
              command: npm run test -- --no-watch --code-coverage --no-progress --browsers=ChromeHeadlessCI
          # Test the source code
          - run:
              name: e2e
              command: npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js
          # Build project withconfiguration based on current branch
          - run:
              name: Building
              command: npm run build -- --prod

    workflows:
        version: 2
        # The build workflow
        test_and_build:
            jobs:
                - build


-----------------

`.travis.yml :`

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

    before_install:
      - npm update

    install:
      - npm install

    script:
      - npm run lint
      - npm run test -- --no-watch --code-coverage --no-progress --browsers=ChromeHeadlessCI
      - npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js
      - npm run build -- --prod

-----------------

`.travis.yml : for coveralls`

    install dependencie : npm install coveralls --save-dev
    then in .travis.yml

    ...
    script:
    ...
      - npm run test -- --no-watch --code-coverage --no-progress --browsers=ChromeHeadlessCI
      - cat ./coverage/awesome-list/lcov.info | ./node_modules/
    ...

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
