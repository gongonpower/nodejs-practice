var http = require('http')
var fs = require('fs')
var zlib = require('zlib')

var server = http.createServer(function(req, res) {
    var filename = req.headers.filename+'-srv'
    console.log('file requested received: ', filename)
    req.pipe(zlib.createGunzip())
    req.pipe(fs.createWriteStream(filename))
    .on('finish', function(){
        res.writeHead(201, {'Content-Type': 'text/plain'})
        res.end('that is it\n')
        console.log('file saved :', filename)
    })
})
server.listen(3000, function(){
    console.log('listening at 3000')
})
