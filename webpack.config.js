const path = require('path');

const PATHS = {
	srcjs: path.resolve(__dirname, 'src', 'js'),
	build: path.resolve(__dirname, 'build')
};

module.exports = {
	context: __dirname,
	target: 'web',
	entry: './src/js/index.js',
	output: {
		filename: 'js/bundle.js',
		path: PATHS.build
	},
	devtool: 'source-map',
	resolve: {
		alias: {
			srcjs: PATHS.srcjs
		}
	},
	module: {
		rules: [{
			test: /\.html$/,
			loader: 'file-loader',
			query: { name: '[name].[ext]' }
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: { presets: ['react', 'es2015'] }
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	}
};
