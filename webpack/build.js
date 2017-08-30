const ora = require('ora')
const rm = require('rimraf')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const merge = require('webpack-merge')

const { log } = require('../lib/log')
const config = require('./config')
	.build

require('./lib/check-versions')()

process.env.NODE_ENV = 'production'

const { resolveCwd } = require('./lib/utils')
const { isPlainObject } = require('./lib/utils')

const tofurc = require('../lib/get-config')()
let webpackConfig = require('./webpack.prod')
if (tofurc && tofurc.webpack && isPlainObject(tofurc.webpack)) {
	webpackConfig = merge(webpackConfig, tofurc.webpack)
}

module.exports = (compress, deleteDist) => {
	const spinner = ora('构建打包中...')
	spinner.start()

	rm(path.join(config.assetsRoot), err => {
		if (err) throw err

		webpack(webpackConfig, function(err, stats) {
			spinner.stop()
			if (err) throw err

			process.stdout.write(stats.toString({
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}) + '\n\n')

			log('打包成功。', 'cyan')

			// 移动图片位置
			fs.move(resolveCwd('./dist/img'), resolveCwd('./dist/static/img'), (err) => {
				if (err) return console.error(err)
				log('正在压缩ZIP', 'cyan')
				// 压缩 dist 文件夹，并移动到桌面
				if (compress) {
					require('./lib/compress.js')(deleteDist)
				}
			})

		})
	})
}
