const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})

readStream.on('data', (chunk) => {
    // console.log('----- New Chunck -----')
    // console.log(chunk.toString())
    writeStream.write('\n ------ New Chunk -----\n')
    writeStream.write(chunk)
})

const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.pipe(writeStream)