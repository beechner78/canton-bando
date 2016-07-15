/**
* Very simple server implementation
* @author Paul Beechner
*/
import express = require('express');
import path = require('path');
import compression = require('compression');

var port: number = process.env.PORT || 3000;
var app = express();

// configuration
// static content (html / css / images)
app.use('/public', express.static(path.resolve(__dirname, '../../public')));
app.use('/node_modules', express.static(path.resolve(__dirname, '../../node_modules')));
// GZIP compression for content 
app.use(compression());

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
}

app.get('/*', renderIndex);

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Port:' + port);
    console.log(__dirname);
});
