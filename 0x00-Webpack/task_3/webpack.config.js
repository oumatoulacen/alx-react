const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	plugins: [
		new HTMLWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
		],
	devtool: 'inline-source-map', //  support inline source mapping
	mode: 'development',
	entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
	},
	performance: {
		maxAssetSize: 1000000,
	},  
  module: {
	rules: [
		{
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],  // Corrected order(order matters)
		},
		{
			test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
			// type: 'asset/resource',
			use: [
				"file-loader",
				{
					loader: "image-webpack-loader",
					options: {
						bypassOnDebug: true,
						disable: true,
					},
				},
			], 
		},
	],
},
};

