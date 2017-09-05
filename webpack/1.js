/*webpack
https://doc.webpack-china.org/
http://zhaoda.net/webpack-handbook/what-is-webpack.html webpack中文参考文档
https://doc.webpack-china.org/concepts

模块打包器
代码分割：模块热更新
webpack 默认加载的是webpack.config.js
webpack --config 
npm run build
enrty output loader plugins

html-webpack-plugin 插件 自动化生成HTML
动态生成html 文件及多个文件，及生成不同的JS文件


webpack 的错误处理.   $webpack  --display-error-details

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


//loader

