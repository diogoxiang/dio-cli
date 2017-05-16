// var Promise = require("bluebird"),
//     fs = Promise.promisifyAll(require('fs-extra'));


// let root = __dirname.replace(/lib/, '')


// function init(args) {
//     return fs.copyAsync(root + 'templates', args.project, { clobber: true })
//         .then(function(err) {
//             if (err) return console.error(err)
//         })
// }
/**
 * @author diogo 2017-5-16 14:34:59
 */
var path = require('path');
var join = path.join;
var basename = path.basename;
var fs = require('fs');
var vfs = require('vinyl-fs');
var renameSync = fs.renameSync;
var existsSync = fs.existsSync;
var chalk = require('chalk');
var through = require('through2');
var emptyDir = require('empty-dir');
var info = require('./logger').info;
var error = require('./logger').error;
var success = require('./logger').success;
var isCnFun = require('./utils').isCnFuc;
var emptyFs = require('./utils').emptyFs;



/**
 * @func 初始化 
 * 
 * @param {any} args 
 */
function init(args) {
    var omiCli = chalk.bold.cyan("Dio-Cli");
    var isCn = isCnFun(args.language);
    var customPrjName = args.project || '';
    var tpl = join(__dirname, '../templates/app');
    var dest = join(process.cwd(), customPrjName);
    var projectName = basename(dest);
    var mirror = args.mirror;

    console.log();
    console.log(omiCli + (!isCn ? " is booting... " : " 正在启动..."));
    console.log(omiCli + (!isCn ? " will execute init command... " : " 即将执行 init 命令..."));


    if (existsSync(dest) && !emptyDir.sync(dest)) {
        console.log();
        process.stdout.write(!isCn ? "This directory isn't empty, empty it? [Y/N] " : "此文件夹不为空，是否需要清空？ [Y/N]: ");
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        process.stdin.on('data', (chunk) => {
            chunk = chunk.replace(/\s\n|\r\n/g, '');
            if (chunk !== 'y' && chunk !== 'Y') {
                process.exit(0);
            } else {
                console.log(chalk.bold.cyan("Dio-Cli") + (!isCn ? ' is emptying this directory...' : ' 正在清空此文件夹...'));
                emptyFs(dest);
                createApp()
            }
        });
    } else {
        createApp()
    }



    function createApp() {
        console.log();
        console.log(chalk.bold.cyan("Dio-Cli") + (!isCn ? ' will creating a new dio app in ' : ' 即将创建一个新的应用在 ') + dest);

        vfs.src(['**/*', '!mode_modules/**/*'], { cwd: tpl, cwdbase: true, dot: true })
            .pipe(template(dest, tpl))
            .pipe(vfs.dest(dest))
            .on('end', function() {
                try {
                    info('Rename', 'gitignore -> .gitignore');
                    renameSync(join(dest, 'gitignore'), join(dest, '.gitignore'));
                    if (customPrjName) {
                        try {
                            process.chdir(customPrjName);
                        } catch (err) {
                            console.log(error(err));
                        }
                    }
                    info('Install', 'npm will install dependencies');
                    console.log();
                    require('./install')(mirror, done)
                } catch (e) {
                    console.log(error(e))
                }
            })
            .resume();
    }


    function done() {
        console.log();
        console.log();
        console.log();
        success(`Congratulation! "${projectName}" has been created successful! `);
        console.log(`
    
        Using the scaffold with Gulp + Webpack + Babel + BrowserSync,
    
        if you are not in ${projectName}, please run 'cd ${projectName}', then you can:
    
        > ${chalk.bold.white('npm run dev')}         Starts the development server
        > ${chalk.bold.white('npm run dist')}        Publish your project`);

        console.log();
        console.log(`${chalk.bold.cyan('Dio!')} hhttps://github.com/diogoxiang/dio-cli`)
    }



}


/**
 * 
 * @func 模板复制 
 * @param {any} dest 
 * @param {any} cwd 
 * @returns 
 */
function template(dest, cwd) {
    return through.obj(function(file, enc, cb) {
        if (!file.stat.isFile()) {
            return cb();
        }

        info('Copy', file.path.replace(cwd + '/', ''));
        this.push(file);
        cb();
    });
}

module.exports = init;