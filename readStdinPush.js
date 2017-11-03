process.stdin
.on('data', function(chunk){
    console.log('new data available')
    console.log('chunk read : (' + chunk.length, ') "', chunk.toString(), '"')
})
.on('end', function(){
    process.stdout.write('end of stream')
})
