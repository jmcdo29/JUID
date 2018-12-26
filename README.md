# genUUID

[![Build Status](https://travis-ci.com/jmcdo29/JUID.svg?branch=master)](https://travis-ci.com/jmcdo29/JUID)
[![codecov](https://codecov.io/gh/jmcdo29/JUID/branch/master/graph/badge.svg)](https://codecov.io/gh/jmcdo29/JUID)

A quick Node package to generate a version 4 variant 1 UUID.

---

To install the package run `npm install juid` or `yarn install juid`.

## Import the package

into TypeScript with

```TypeScript
import { genUUID } from 'juid';
```

or into JavaScript with

```JavaScript
const genuuid = require('juid');
```

## Use the function

in TypeScript with

```TypeScript
const id = genUUid();
```

and in JavaScript with

```JavaScript
const id = genuuid.genUUID();
```