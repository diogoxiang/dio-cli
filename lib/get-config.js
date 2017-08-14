const fs = require('fs')
const { resolveCwd } = require('./utils')

module.exports = () => {
    if (fs.existsSync(resolveCwd('.diofurc'))) {
        try {
            return fs.readFileSync(resolveCwd('.diofurc'))
        } catch (err) {
            console.error('获取 diofurc 出错')
            console.error(err)
        }
    } else if (fs.existsSync(resolveCwd('.diofurc.js'))) {
        return require(resolveCwd('.diofurc.js'))
    } else if (fs.existsSync(resolveCwd('.diofurc.json'))) {
        return require(resolveCwd('.diofurc.json'))
    } else {
        return
    }
}
