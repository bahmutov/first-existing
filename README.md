# first-existing

> Finds the first existing file from a list of choices

[![NPM][first-existing-icon] ][first-existing-url]

[![Build status][first-existing-ci-image] ][first-existing-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install

Install and use under Node: `npm install first-existing --save`

Import the module

```js
var firstExisting = require('first-existing');
```

## Use

Find first file from the source folder

```js
var choices = ['foo.js', 'bar.js', 'baz.js'];
var foundFilename = firstExisting(__dirname, choices);
```

Find first file from the current working folder

```js
var choices = ['foo.js', 'bar.js', 'baz.js'];
var foundFilename = firstExisting(process.cwd(), choices);
```

You can pass just a single filename, instead of a list
```js
var foundFilename = firstExisting(__dirname, 'foo.txt');
```

Always returns full path to the found file.

### Walking up the folder

You can pass a flag to the function to keep walking the folder tree up to
the root until the file is found. For example,

```js
var found = firstExisting(__dirname, ['foo.txt', 'bar.txt'], true);
// finds first existing file from the candidates
// in __dirname, its parent, etc.
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/first-existing/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[first-existing-icon]: https://nodei.co/npm/first-existing.svg?downloads=true
[first-existing-url]: https://npmjs.org/package/first-existing
[first-existing-ci-image]: https://travis-ci.org/bahmutov/first-existing.svg?branch=master
[first-existing-ci-url]: https://travis-ci.org/bahmutov/first-existing
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
