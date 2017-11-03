var fs = require('fs')
var file = process.argv[2]
var count = process.argv[3]
if (!count) {
    count = 10
}
var data = 'Dolor nobis accusamus eius beatae recusandae facere omnis nam incidunt! Illo suscipit laudantium quae a facere. Incidunt repellendus accusamus doloremque architecto eveniet doloribus inventore laudantium aliquam. Inventore quis molestiae iusto!'

var wstream = fs.createWriteStream(file)
for (let i=0; i<count;i++){
    wstream.write(data)
}
wstream.end()

// for (let i=0; i<count;i++){
//     fs.appendFileSync(file, data)
// }

