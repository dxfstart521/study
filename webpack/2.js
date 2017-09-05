//1.css-loader使用babel-loader转换es6
Var path=requier(‘path’);
Module: {
	loaders: [
		{
			test: /\.js$/,
			exclude: path.resolve(__dirname,’node_modules’),//排除的范围
			include: path.resolve(__dirname,’src’),处理的范围
			loader: ‘babel’,
			query: {
				presets: [‘latest’]
			}
		},
		{
			test: /\.css$/,
			loaders: ‘style-loader!css-loader?importLoaders=1!postcss-loader’
		},//执行顺序是从右到左。postcss-loader要放在css之前处理
		{
			test: /\.less$/,
			loader: ‘style!css!postcss-loader!less’
	//(sass和less配置一样)postcss要放在less和sass之后，css,styleloader之前.使用less,sass不用添加importLoaders
		}
		
	]
},
postcss: [//样式支持兼容处理
	require(‘autoprefixer’)({
		browser: ‘last 5 versions’
	})	
] 


/*
2.babel loader

presets:[‘latest’]

npm install babel-presets-latest

.babelrc
{
Persets: [‘latest’]
}
Packjson文件
Babel: { presets: [‘latest’]}

npm install style-loader css-loader


npm install post-loader —save-dev. 后处理器样式 可以到npmjs.com官网查看用法
npm install autoprefixer —save-dev
npm install less-loader —save-dev
*/


/*
3.处理模版文件
Webpack 官网
List loaders ——templating
npm install html-loader —save-dev. 


{test: /\.tpl$/, }


4.处理图片及其他文件
处理css中的背景及组件的img中的src	


npm install file-loader —save-dev*/

{
	test: /\.(png|jpg|gif|svg)$/,
	loader: ‘file-loader’,
	query: {
		name: ‘assets/[name]-[hash:5].[ext]’
	}
}

<img src=“${requird(‘../../img.png’)}” /> 模版中引用图片路径的方法

// install url-loader —save-dev 把图片打包成base64格式
//npm intall image-loader —save-dev

{
	test: /\.(png|jpg|gif|svg)$/,
	loader: [
		‘url-loader!limit=1000&name=assets/[name]-[hash:5].[ext]’,
		‘image-webpack’

	],
}

