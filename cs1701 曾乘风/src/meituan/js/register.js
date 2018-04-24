$(function () {
var oform=document.getElementById("form")
var omsg=$(".msg")
var tf1,tf2,tf3,tf5;
oform.txt1.oninput=oform.txt1.onpropertychange=function () {
	tf1=false
	omsg[0].innerText = ""
	if(/^1\d{10}$/.test(this.value)){
		omsg[0].innerText = ""
		tf1 = true
	} else {
		var $img=$("<img src='images1/no.png'>")
		var $span=$("<span>请输入你的手机号</span>")
		omsg.eq(0).append($img)
		omsg.eq(0).append($span)
	}
}
oform.pwd.oninput=oform.pwd.onpropertychange=function () {
	tf2=false
	omsg[1].innerText = ""
	if (/^.{6,20}$/.test(this.value)) {
		omsg[1].innerText = ""
		tf2 = true
	} else {
		var $img=$("<img src='images1/no.png'>")
		var $span=$("<span>6-20位密码</span>")
		omsg.eq(1).append($img)
		omsg.eq(1).append($span)
	}
	var arr1=this.value.split("")
	var shuzi=0
	var zimu=0
	var teshu=0
	for (var i = 0; i <arr1 .length; i++) {
	if(/[1-9]/.test(arr1.length)){
		shuzi=shuzi+1
	}
		if(/[a-zA-Z]/.test(arr1.length)){
			zimu=zimu+1
		}
		if(/[^\w]/.test(arr1.length)){
			teshu=teshu+1
		}
	}
	if(arr1 .length>=6) {
		if ((shuzi == arr1.length && shuzi <13)||(zimu == arr1.length && zimu <13)||(zimu+shuzi==arr1.length&&arr1.length<8)){
		$(".strength").css("display","block")
			$(".strength").children("span").removeClass("background-2")
		$(".strength").children("span").eq(0).addClass("background-1").siblings().removeClass("background-1")
		}
		if ((shuzi == arr1.length && shuzi >=13)||(zimu == arr1.length && zimu >=13)||(zimu+shuzi==arr1.length&&arr1.length>=8&&arr1.length<13)||(teshu!=0&&arr1.length<8)){
			$(".strength").css("display","block")
			$(".strength").children("span").removeClass("background-2")
			$(".strength").children("span").addClass("background-1")
			$(".strength").children("span").eq(2).removeClass("background-1")
		}
		if ((zimu+shuzi==arr1.length&&arr1.length>=13)||(teshu!=0&&arr1.length>=8)){
			$(".strength").css("display","block")
			$(".strength").children("span").removeClass("background-1")
			$(".strength").children("span").addClass("background-2")
		}
	}
}
oform.txt2.oninput=oform.txt2.onpropertychange=function () {
	tf3=false
	omsg[2].innerText=""
	if(this.value==$("input").eq(1).val()){
		omsg[2].innerText=""
		tf3=true
	}else{
		var $img=$("<img src='images1/no.png'>")
		var $span=$("<span>密码不相同</span>")
		omsg.eq(2).append($img)
		omsg.eq(2).append($span)
	}
}
$("button").eq(0).text(parseInt(Math.random()*9999))
	$("button").eq(0).on("click",function () {
		$("button").eq(0).text(parseInt(Math.random()*9999))
	})
oform.onsubmit=function () {
	var num1=parseInt($("button").eq(0).text())
	var num2=parseInt($("input").eq(3).val())
	if(num1==num2){
		tf5=true
	}else {
		tf5=false
	}
		var tf4=true
		var cookieobj=JSON.parse(getCookie("register")||'[]')
		var registerobj={}
		registerobj.txt=$("input").eq(0).val()
		registerobj.pwd=$("input").eq(1).val()
		for(var i=0;i<cookieobj.length;i++){
			if(cookieobj[i].txt==registerobj.txt){
				tf4=false
				alert("账号已注册")
			}
		}
	console.log(tf1, tf2, tf3, tf4, tf5);
	if(tf1&&tf2&&tf3&&tf4&&tf5){
			cookieobj.push(registerobj)
			Cookie("register",JSON.stringify(cookieobj))
			alert("注册成功")
		    location.href="login.html"
		}else{
			alert("请填好信息")
		}
		
		return false
	}
	$(".login").on("click",function () {
		location.href="login.html"
	})
})