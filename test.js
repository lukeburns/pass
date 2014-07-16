var test = require("tap").test,
		pass = require('./'),
		fs = require('fs'),
		handle = require('handle');

test("pass through writable", function (t) {
	t.plan(1);
	fs.createReadStream('README.md')
	.pipe(pass(fs.createWriteStream('test.md')))
	.pipe(handle(function(data) {
		var contents = fs.readFileSync('test.md', 'utf8');
		t.equal(contents, data);
		fs.unlinkSync('test.md');
	}));
});