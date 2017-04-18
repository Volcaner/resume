var webpack = require('webpack');
var path = require('path');

module.exports = {
	//页面入口配置文件
	entry: {
		index: './js/main.js'
	},

	// 入口文件输出配置
	output: {
		path: path.resolve(__dirname, './js/bin'),
		filename: 'bin.js'
	},

	// 加载配置
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: 'style!css!scss!sourcemap'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},

	// 插件项
	plugins: [],

	// 其他解决方案配置
	resolve: {}
};