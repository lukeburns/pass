var PassThrough = require('stream').PassThrough

module.exports = pass;

function pass(writable) {
	var stream = new PassThrough;
	stream
	.on('data', function (data) {
		writable.write(data);
	})
	.on('end', function () {
		writable.end();
	});
	return stream;
}