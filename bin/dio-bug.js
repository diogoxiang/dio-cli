const program = require('commander')
const cwd = process.cwd()

const fs = require('fs-extra')

const { resolveCwd } = require('../lib/utils')
const { log } = require('../lib/log')
const registerLogger = require('../lib/register-logger')

program
	.option('-C, --no-compress', '不压缩')
	.option('-d, --delete', '压缩后删除 dist')
	.parse(process.argv)

bug()

registerLogger('bug', process)

async function bug(params) {
	console.log(cwd);
	console.log(program.compress);
	console.log(program.delete);
}
