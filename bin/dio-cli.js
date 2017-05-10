#! /usr/bin/env node

let program = require('commander'),
    gs = require('../lib/generateStructure');

program
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .parse(process.argv);

let pname = program.args[0]

if (!pname) program.help();

gs(pname);