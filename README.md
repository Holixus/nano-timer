[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

# nano-timer

A delayed Promise.

## API

```js
var timer = require('nano-timer');

timer(100/*ms*/, 'ok').then(function (v) {
	assert.strictEqual(v, 'ok');
}).catch(function (e) {
	console.error(e);
});
```

### times(time, ...)

* `time` Number -- delay of promise resolve in milliseconds
* ... -- resolve arguments

Creates Promise with postponed resolve. It can be cancelled.

```js
var timer = require('nano-timer'),
    Promise = require('nano-promise');

var delay = timer(100/*ms*/, 'ok').then(function (v) {
	assert.strictEqual(v, 'ok');
}).catch(function (e) {
	if (e === Promise.CANCEL_REASON)
		console.log('Cancelled!');
	else
		console.error(e);
});

timer.cancel(); // will output Promise.CANCEL_REASON to console.
```

[bithound-image]: https://www.bithound.io/github/Holixus/nano-timer/badges/score.svg
[bithound-url]: https://www.bithound.io/github/Holixus/nano-timer

[gitter-image]: https://badges.gitter.im/Holixus/nano-timer.svg
[gitter-url]: https://gitter.im/Holixus/nano-timer

[npm-image]: https://badge.fury.io/js/nano-timer.svg
[npm-url]: https://badge.fury.io/js/nano-timer

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-timer.svg
[github-url]: https://github.com/Holixus/nano-timer/tags

[travis-image]: https://travis-ci.org/Holixus/nano-timer.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-timer

[coveralls-image]: https://coveralls.io/repos/github/Holixus/nano-timer/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Holixus/nano-timer?branch=master

[david-image]: https://david-dm.org/Holixus/nano-timer.svg
[david-url]: https://david-dm.org/Holixus/nano-timer

[license-image]: http://img.shields.io/npm/l/nano-timer.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dm/nano-timer.svg
[downloads-url]: https://npmjs.org/package/nano-timer
