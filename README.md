## pass(writable)

For passing streams through writables.

### Installation
```
npm install through2-pass
```

### Example
Pass through a write stream.
```
fs.createReadStream('README.md')
.pipe(pass(fs.createWriteStream('test.md')))
.pipe(process.stdout);
```