var fs = require('fs')
fs.readFile('./names.txt', function(er, buf){
    var isBuf = Buffer.isBuffer(buf)
    console.log('is buffer ? ', isBuf)
    console.log(buf)
    console.log(buf.toString())
})
var user = 'johnny'
var pass = 'c-bad'
var authstring = user + ':' + pass;

var buf = new Buffer(authstring)
var encoded = buf.toString('base64')
console.log('-------')
console.log('encoded : ', encoded)

