var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));


let root = __dirname.replace(/lib/, '')


function generateStructure(project) {
    return fs.copyAsync(root + 'structure', project, { clobber: true })
        .then(function(err) {
            if (err) return console.error(err)
        })
}


module.exports = generateStructure;