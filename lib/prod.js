/**
 * @author diogo 2017-5-16 15:17:45
 * @func 主要用于编译数据
 */
var fs = require('fs');
var chalk = require('chalk');
var join = require('path').join;
var existsSync = fs.existsSync;

let utils = require('./utils')

/**
 * 
 * @desc 编译方法
 * @param {any} args 
 */
function prod(args) {
    var currentDir = process.cwd();
    var srcPath = join(currentDir, 'src');

    if (existsSync(srcPath)) {
        // var build = require('./omi-pr/build');
        // console.log();
        // console.log(chalk.bold.cyan("Dio-Cli") + " is readying compiling...");
        // console.log();

        utils.execRun('gulp', ['copy'], { stdio: 'inherit' });
        // build(currentDir)
    } else {
        console.log(chalk.bold.red("-------------------------------------------"));
        console.log(chalk.bold.red("---------------- Path Error ---------------"));
        console.log(chalk.bold.red("-------------------------------------------"));
        process.exit(1);
    }

}

module.exports = prod;