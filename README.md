# ng-messenger
[![Build Status](https://travis-ci.org/tonimoeckel/ng-messenger.svg?branch=master)](https://travis-ci.org/tonimoeckel/ng-messenger)
[![codecov](https://codecov.io/gh/tonimoeckel/ng-messenger/branch/master/graph/badge.svg)](https://codecov.io/gh/tonimoeckel/ng-messenger)
[![npm version](https://badge.fury.io/js/ng-messenger.svg)](http://badge.fury.io/js/ng-messenger)
[![devDependency Status](https://david-dm.org/tonimoeckel/ng-messenger/dev-status.svg)](https://david-dm.org/tonimoeckel/ng-messenger?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/tonimoeckel/ng-messenger.svg)](https://github.com/tonimoeckel/ng-messenger/issues)
[![GitHub stars](https://img.shields.io/github/stars/tonimoeckel/ng-messenger.svg)](https://github.com/tonimoeckel/ng-messenger/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/tonimoeckel/ng-messenger/master/LICENSE)

## Demo
https://tonimoeckel.github.io/ng-messenger/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Messaging components

## Installation

Install through npm:
```
npm install --save ng-messenger
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgMessengerModule } from 'ng-messenger';

@NgModule({
  imports: [
    NgMessengerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/tonimoeckel/ng-messenger/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ng-messenger/bundles/ng-messenger.umd.js"></script>
<script>
    // everything is exported ngMessenger namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://tonimoeckel.github.io/ng-messenger/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
