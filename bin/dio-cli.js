#! /usr/bin/env node


'use strict';

var program = require('commander');
var join = require('path').join;
var chalk = require('chalk');
var exists = require('fs-exists-sync');
var spawn = require('cross-spawn');

var options = {
    cmd: '',
    projectName: '',
    mirror: 'default',
    language: 'en'
}


program
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .on('-h, --help', help);


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