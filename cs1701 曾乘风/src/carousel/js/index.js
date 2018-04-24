$(function () {
	document.querySelector(".header").onmousedown=function (e) {
		var e=e||window.event
		var x=e.offsetX
		var y=e.offsetY
	document.onmousemove=function (evt) {
			var eve=evt||window.event
		    console.log(x, y,eve.offsetX,eve.offsetY);
			$(".carousel").css({"left":eve.clientX-x})
			$(".carousel").css({"top":eve.clientY-y})
	}
		document.onmouseup=function () {
			document.onmousemove=document.onmouseup=null
		}
}
	var  oli=document.querySelectorAll("ul li")
	var omove=document.getElementById("bottom")
	var imgindex=0
	for (var i = 0; i < oli.length; i++) {
		this.index=i
		var dian=document.createElement("a")
		omove.appendChild(dian)
	}
	var oa=omove.querySelectorAll("a")
	$(oa[0]).addClass("red").siblings().addClass("white")
	$(oli[0]).fadeIn().siblings().fadeOut()
	var timer=setInterval(function () {
		play()
	},3000)
	function play() {
		imgindex++
		if(imgindex<0){
			imgindex=imgindex+3
		}
		if(imgindex>=3){
			imgindex=imgindex-3
		}
		
		$(oa[imgindex]).removeClass("white").addClass("red").siblings().removeClass("red").addClass("white")
		$(oli[imgindex]).stop(true,true).fadeIn(1000).siblings().fadeOut(1000)
	}
	for (var i = 0; i <oa.length; i++) {
		oa[i].index=i
		oa[i].onmouseenter=function () {
			imgindex=this.index-1
			play()
			clearInterval(timer)
		}
	}
	omove.onmouseleave=function () {
		timer=setInterval(function () {
			play()
		},1000)
	}
	$("#prev").on("click",function () {
		imgindex=imgindex-2
		play()
		clearInterval(timer)
		timer=setInterval(function () {
			play()
		},3000)
	})
	$("#next").on("click",function () {
		play()
		clearInterval(timer)
		timer=setInterval(function () {
			play()
		},3000)
	})
	
})