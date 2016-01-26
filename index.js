"use strict";

var Promise = require('nano-promise');

module.exports = function timer(ms, v) {
	var v = Array.prototype.splice.call(arguments, 1);
	return new Promise(function (resolve, reject) {
		var to = setTimeout(function () {
				resolve.apply(null, v);
			}, ms);
		return { cancel: function () {
			clearTimeout(to);
		}};
	});
};
