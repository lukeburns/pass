var test = require("tap").test,
		pass = require('./'),
		fs = require('fs');

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

function handle(callback) {
	var all = [];
	var stream = require('through2')();
	stream
	.on('data', function(data) { 
		all.push(data); 
	})
	.on('end', function() { 
		callback(all.join('').toString());
	});
	return stream;
}