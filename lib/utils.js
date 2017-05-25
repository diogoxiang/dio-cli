/**
 * @author diogo 2017-5-11 13:47:02
 * @desc 一些工具类
 */
var fs = require('fs');
let existsSync = fs.existsSync;
let readdirSync = fs.readdirSync;
let rmdirSync = fs.rmdirSync;
let unlinkSync = fs.unlinkSync;
let statSync = fs.statSync;

const spawnSync = require('cross-spawn').sync;
// 日志输出
const logger = require('./logger');
/**
 * 
 * @desc 判断语言
 * @param {any} language 
 * @returns 
 */
function isCnFuc(language) {
    return language === "cn" ? true : false
}

/**
 * 
 * @desc 清空文件目录 
 * @param {any} path 
 */
function emptyFs(path) {
    var files = [];
    var dir = [];
    if (existsSync(path)) {
        files = readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (statSync(curPath).isDirectory()) {
                emptyFs(curPath)
            } else {
                unlinkSync(curPath);
            }
        });
        dir = readdirSync(path);
        dir.forEach(function(dirName, index) {
            rmdirSync(path + "/" + dirName)
        })
    }
}

/**
 * @desc 运行NPM方法
 * 
 * @param {any} cmd 方法, "npm"
 * @param {any} args  参数
 * @param {any} opts 配置
 */
function execRun(cmd, args, opts) {
    opts = opts || {}
    const errMessage = opts.errorMessage
    const command = spawnSync(cmd, args || [], opts);
    if (command.status === 1) {
        if (command.stderr) {
            logger.error(errMessage || command.stderr.toString())
        }
        process.exit(1)
    }

    return command
}



module.exports = {
    isCnFuc: isCnFuc,
    emptyFs: emptyFs,
    execRun: execRun
};