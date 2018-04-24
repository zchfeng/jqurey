// define定义模块
define("a",[],function () {
	var obj={}
	obj.add=function (num1,num2) {
		return parseInt(num1)+parseInt(num2)
	}
	return obj
})