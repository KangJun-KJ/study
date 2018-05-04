const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			use: [{
				loader: 'file-loader',
				options: {}
			}]
		},{
			test: /\.san$/,
            loader: 'san-loader'
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		},{
			test:/\.scss$/,
			use:ExtractTextPlugin.extract({
				use:['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		//使用模板html
		new HtmlWebpackPlugin({
			title: "San Webpack",
			template: "index.html"
		}),
		// 从 .js 文件中提取出来的 .css 文件的名称
		new ExtractTextPlugin({
			filename: "[name].css",
		})
	],
	resolve:{
		//寻找模块的跟目录
		modules:['node_modules'],
		//模块后缀名匹配
		extensions:['.san','.js','.css'],
		//模块别名配置，映射模块
		alias:{
			'@':path.join(__dirname, './src')
		}
	}
}