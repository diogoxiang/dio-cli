#! /usr/bin/env node


'use strict';

var program = require('commander');
var join = require('path').join;
var chalk = require('chalk');
var exists = require('fs-exists-sync');
var spawn = require('cross-spawn');

const logger = require('../lib/logger')
var options = {
    cmd: '',
    projectName: '',
    mirror: 'default',
    language: 'en'
        // language: 'cn'
}


program
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .on('-h, --help', help);


/**
 * @func 初始化PC的
 */
program
    .command('init [projectName]')
    .description('Initialize a new Dio application in the current folder')
    .action(function(projectName, option) {
        var cmd = 'init';
        if (option.parent.mirror) {
            options.mirror = option.parent.mirror;
        }
        switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language })
    })

/**
 * @desc 初始化VUE版主要用于手机端的
 */
program
    .command('vinit [projectName]')
    .description('Initialize a new Vue application in the current folder ')
    .action(function(projectName, option) {
        var cmd = 'vinit';
        if (option.parent.mirror) {
            options.mirror = option.parent.mirror;
        }
        switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language })
    })

/**
 * @desc 编译相应的代码
 */
program
    .command('prod')
    .description('Compile your project')
    .action(function(option) {
        var cmd = 'prod';
        logger.info('build', 'Compile your project')
        switchCommand(cmd);
    })

/**
 * @desc 编译相应的代码
 */
program
    .command('dev')
    .description('Compile your project')
    .action(function(option) {
        var cmd = 'dev';
        logger.info('watch', 'Compile your project')
        switchCommand(cmd);
    })


program.parse(process.argv);


// let pname = program.args[0]

// if (!pname) program.help();

// // gs(pname);


/**
 * @func 执行相应的方案
 * 
 * @param {any} cmd 
 * @param {any} args 
 */
function switchCommand(cmd, args) {
    if (cmd) {
        require('../lib/' + cmd)(args);
    } else {
        setTimeout(program.help, 0);
    }
}

/**
 * 
 * @func help method
 * 
 */
function help() {
    console.log('  Commands:');
    console.log();
    console.log(`     ${chalk.green('init  [project-name]')}           Initialize a new Dio application in the current folder `);
    console.log(`     ${chalk.green('pr')}                             Compile your Dio project `)
    console.log();
    console.log('  All commands can be run with -h (or --help) for more information.')
}