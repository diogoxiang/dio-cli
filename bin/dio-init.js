const cwd = process.cwd()

const fs = require('fs-extra')
const inquirer = require('inquirer')
const ora = require('ora')
const pacote = require('pacote')

const { resolveCwd } = require('../lib/utils')
const { log } = require('../lib/log')
const registerLogger = require('../lib/register-logger')


