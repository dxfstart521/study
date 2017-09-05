const webpack =require('webpack');
const path = require('path');

let config = {
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname,'node_module'),
				include: path.resolve(__dirname,'src'),
				loader: 'jsx-loader?harmony'
			}
		],
	},
	plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })


    ],
};


module.exports=config;



