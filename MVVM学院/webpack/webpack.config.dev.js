const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')

module.exports = merge(baseWebpackConfig, {
	mode: "development",
	devtool: 'cheap-source-map',
	devServer: {
//		所有来自 dist/ 目录的文件都做 gzip 压缩和提供为服务：
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
})