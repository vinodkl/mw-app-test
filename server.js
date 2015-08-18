var express = require('express'),
    path = require('path'),
    marko = require('marko');

require('lasso').configure('./configs/lazzo-config.json');
require('lasso/node-require-no-op').enable('.less', '.css');

var app = express();
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    var template = marko.load(require.resolve('./pages/home/template.marko'));
    res.set('Content-Type', 'text/html');
    template.render({

    }, res);
});

app.listen(process.env.PORT || 8089);
