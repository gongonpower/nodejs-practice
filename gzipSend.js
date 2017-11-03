var fs = require('fs')
var zlib = require('zlib')
var http = require('http')
var path = require('path')
var file = process.argv[2]
var server = process.argv[3]

var options = {
    hostname: server,
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
        filename: path.basename(file),
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip'
    }
}

var req = http.request(options, function(res){
    console.log('server response :', res.statsCode)
})

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(req)
    .on('finish', function(){
        console.log('file successfully sent')
    })
