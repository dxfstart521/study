/*webpack
https://doc.webpack-china.org/
代码分割：模块热更新
webpack 默认加载的是webpack.config.js
webpack --config 
npm run build

html-webpack-plugin 插件 自动化生成HTML
动态生成html 文件及多个文件，及生成不同的JS文件

webpack.config.js*/


module.export={
	entry: {	//入口文件

	},
	output: {
		path: '',//打包后文件的路径 (输出)
		fileName:'',//打包后文件的名字,
		publicPath:''  //会给pat加个公共路径
	},
	pulgins: [
		new htmlWebpackPulgin({
			template: 'index.html',//把内容生成到根目录下面的index.html
			mintry: {} //压缩空格
		})
	]
}






/*html-webpack-plugin 插件 自动化生成HTML
lugin.options.title  

www.npmjs.com  查询html-webpack-plugin 官方文档

如果要生成多页面，在plugins 里面在调一次new htmlWebpackPulgin({})*/

