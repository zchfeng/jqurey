$(function(){document.querySelector(".header").onmousedown=function(e){var n=(e=e||window.event).offsetX,t=e.offsetY;document.onmousemove=function(e){var o=e||window.event;console.log(n,t,o.offsetX,o.offsetY),$(".carousel").css({left:o.clientX-n}),$(".carousel").css({top:o.clientY-t})},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}};for(var e=document.querySelectorAll("ul li"),n=document.getElementById("bottom"),t=0,o=0;o<e.length;o++){this.index=o;var l=document.createElement("a");n.appendChild(l)}var s=n.querySelectorAll("a");$(s[0]).addClass("red").siblings().addClass("white"),$(e[0]).fadeIn().siblings().fadeOut();var c=setInterval(function(){u()},3e3);function u(){++t<0&&(t+=3),t>=3&&(t-=3),$(s[t]).removeClass("white").addClass("red").siblings().removeClass("red").addClass("white"),$(e[t]).stop(!0,!0).fadeIn(1e3).siblings().fadeOut(1e3)}for(o=0;o<s.length;o++)s[o].index=o,s[o].onmouseenter=function(){t=this.index-1,u(),clearInterval(c)};n.onmouseleave=function(){c=setInterval(function(){u()},1e3)},$("#prev").on("click",function(){t-=2,u(),clearInterval(c),c=setInterval(function(){u()},3e3)}),$("#next").on("click",function(){u(),clearInterval(c),c=setInterval(function(){u()},3e3)})});