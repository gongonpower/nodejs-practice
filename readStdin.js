process.stdin
.on('readable', function(){
    var chunk
    console.log('new data available')
    while((chunk=process.stdin.read()) !==null){
        console.log('chunk read : (', chunk.length, ') "', chunk.toString(), '"')
    }
})
.on('end', function(){
    process.stdout.write('end of stream')
})

