var through = require('through2')

module.exports = pass;

function pass(writable) {
	var stream = through(function (chunk, enc, callback) {
		writable.write(chunk, enc);
		this.push(chunk, enc);
		callback();
	});
	return stream;
}