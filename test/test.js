var timer = require('../index.js'),
    assert = require('core-assert'),
    Promise = require('nano-promise');


suite('timers', function () {

	test('(100, "val")', function (done) {
		var val = "val";
		timer(100, val).then(function (v) {
			assert.strictEqual(v, val);
			done();
		}, function (e) {
			done(Error('rejected'));
		});
	});

	test('(100, "val", "val2")', function (done) {
		var val = "val", val2 = "val2";
		timer(100, val, val2).then(function (v, vv) {
			assert.strictEqual(v, val);
			assert.strictEqual(vv, val2);
			done();
		}, function (e) {
			done(Error('rejected'));
		});
	});

	test('(100, "val", "val2").cancel()', function (done) {
		var val = "val", val2 = "val2";
		timer(100, val, val2).then(function (v, vv) {
			done(Error('not cancelled!'));
		}, function (e) {
			assert.strictEqual(e, Promise.CANCEL_REASON);
			done();
		}).cancel();
	});

	test('(100, "val", "val2") and later cancel()', function (done) {
		var val = "val", val2 = "val2";
		var t = timer(100, val, val2).then(function (v, vv) {
			done(Error('not cancelled!'));
		}, function (e) {
			assert.strictEqual(e, Promise.CANCEL_REASON);
			done();
		});
		timer(50).then(function () {
			t.cancel();
		});
	});

});
