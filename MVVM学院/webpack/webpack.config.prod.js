const path = require("path");
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpachPlugin = require("copy-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
	mode: "production",
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpachPlugin([{
			from: path.resolve(__dirname, './static'),
			to: path.resolve(__dirname, './dist/static'),
			toType: 'dir'
		}]),

	]

})