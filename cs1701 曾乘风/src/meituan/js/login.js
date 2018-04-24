$(window).load(function () {
	(function () {
		var cookie=JSON.parse(getCookie("login")||'[]')
		console.log(cookie);
		if( cookie.length !=0) {
			$("input").eq(0).val(cookie[0].txt)
			pwd=$("input").eq(1).val(cookie[0].pwd)
		}
	})();
	$("#myform").on("submit",function () {
		var tf=false
		var obj={}
		var tel=$("input").eq(0).val()
		var pwd=$("input").eq(1).val()
		obj.txt=tel
		obj.pwd=pwd
		var cookieobj=JSON.parse(getCookie("register")||'[]')
		for (var i = 0; i <cookieobj .length; i++) {
			if(cookieobj[i].txt==tel&&cookieobj[i].pwd==pwd){
				tf=true
				if($("input").eq(2).prop("checked")){
					var objCookie=JSON.parse(getCookie("login")||"[]");
					console.log(objCookie);
					objCookie.push(obj);
					console.log(objCookie);
					Cookie("login",JSON.stringify(objCookie))
				}
				alert("登录成功")
			}
		}
		if(tf==false){
			alert("密码不正确")
		}
		return false
	})
	$(".register").on("click",function () {
		location.href="register.html"
	})
})