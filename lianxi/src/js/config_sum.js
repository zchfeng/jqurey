require.config({
	baseUrl:"./js",  //设置根目录
	paths:{
		"jquery":["https://cdn.bootcss.com/jquery/3.3.1/jquery","lib/jquery-1.12.3.min"],
		"sum":"a"
	},
	//模块化
	shim:{
		"sum":["jquery"]
	}
})