$(function(){var n,e,t,s,a=document.getElementById("form"),r=$(".msg");a.txt1.oninput=a.txt1.onpropertychange=function(){if(n=!1,r[0].innerText="",/^1\d{10}$/.test(this.value))r[0].innerText="",n=!0;else{var e=$("<img src='images1/no.png'>"),t=$("<span>请输入你的手机号</span>");r.eq(0).append(e),r.eq(0).append(t)}},a.pwd.oninput=a.pwd.onpropertychange=function(){if(e=!1,r[1].innerText="",/^.{6,20}$/.test(this.value))r[1].innerText="",e=!0;else{var n=$("<img src='images1/no.png'>"),t=$("<span>6-20位密码</span>");r.eq(1).append(n),r.eq(1).append(t)}for(var s=this.value.split(""),a=0,l=0,o=0,g=0;g<s.length;g++)/[1-9]/.test(s.length)&&(a+=1),/[a-zA-Z]/.test(s.length)&&(l+=1),/[^\w]/.test(s.length)&&(o+=1);s.length>=6&&((a==s.length&&a<13||l==s.length&&l<13||l+a==s.length&&s.length<8)&&($(".strength").css("display","block"),$(".strength").children("span").removeClass("background-2"),$(".strength").children("span").eq(0).addClass("background-1").siblings().removeClass("background-1")),(a==s.length&&a>=13||l==s.length&&l>=13||l+a==s.length&&s.length>=8&&s.length<13||0!=o&&s.length<8)&&($(".strength").css("display","block"),$(".strength").children("span").removeClass("background-2"),$(".strength").children("span").addClass("background-1"),$(".strength").children("span").eq(2).removeClass("background-1")),(l+a==s.length&&s.length>=13||0!=o&&s.length>=8)&&($(".strength").css("display","block"),$(".strength").children("span").removeClass("background-1"),$(".strength").children("span").addClass("background-2")))},a.txt2.oninput=a.txt2.onpropertychange=function(){if(t=!1,r[2].innerText="",this.value==$("input").eq(1).val())r[2].innerText="",t=!0;else{var n=$("<img src='images1/no.png'>"),e=$("<span>密码不相同</span>");r.eq(2).append(n),r.eq(2).append(e)}},$("button").eq(0).text(parseInt(9999*Math.random())),$("button").eq(0).on("click",function(){$("button").eq(0).text(parseInt(9999*Math.random()))}),a.onsubmit=function(){var a=parseInt($("button").eq(0).text()),r=parseInt($("input").eq(3).val());s=a==r;var l=!0,o=JSON.parse(getCookie("register")||"[]"),g={};g.txt=$("input").eq(0).val(),g.pwd=$("input").eq(1).val();for(var i=0;i<o.length;i++)o[i].txt==g.txt&&(l=!1,alert("账号已注册"));return console.log(n,e,t,l,s),n&&e&&t&&l&&s?(o.push(g),Cookie("register",JSON.stringify(o)),alert("注册成功"),location.href="login.html"):alert("请填好信息"),!1},$(".login").on("click",function(){location.href="login.html"})});