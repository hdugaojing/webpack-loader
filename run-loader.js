const {runLoaders} = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
    resource: path.join(__dirname, './src/demo.txt'),
    loaders: [
        path.join(__dirname, './src/row-loader.js')
    ],
    // 额外上下文
    context: {
       minmize: true 
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    err ? console.log(err) : console.log(result)
})