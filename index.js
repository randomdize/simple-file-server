var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('server is running');
});

app.get('/download', function(req, res) {
    var filePath = '';
    res.download(filePath);
});

app.listen(8080);
console.log('Server is running');
