myPlane={}  //创建一个飞机
myPlane.init=function () {
    this.ele=document.createElement("div")
    gameEngine.ele.appendChild(this.ele)
    this.ele.className="myplane"
    this.ele.style.left=gameEngine.ele.offsetWidth/2-this.ele.offsetWidth/2+"px"
    this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px"
}
myPlane.move1=function (step) {
    this.ele.style.left=this.ele.offsetLeft+step+"px"
    if(this.ele.offsetLeft<=(-this.ele.offsetWidth/2)){
        this.ele.style.left=(-this.ele.offsetWidth/2)+"px"
    }
    if(this.ele.offsetLeft>=(gameEngine.ele.offsetWidth-this.ele.offsetWidth/2)){
        this.ele.style.left=(gameEngine.ele.offsetWidth-this.ele.offsetWidth/2)+"px"
    }
}

myPlane.move2=function (step) {
    this.ele.style.top=this.ele.offsetTop+step+"px"
    if(this.ele.offsetTop>=gameEngine.ele.offsetHeight-this.ele.offsetHeight){
        this.ele.style.top=gameEngine.ele.offsetHeight-this.ele.offsetHeight+"px"
    }
    if(this.ele.offsetTop<=0){
        this.ele.style.top="0px"
    }
}
myPlane.boom=function () {
    var me=0
    var timer=setInterval(function () {
            me++
        background=`url(images/me_die${me}.png) no-repeat`;
            if(me==4){
                clearInterval(timer)
                alert("GAME OVER")
                alert(All+"分")
                location.href="dafeiji.html"
            }
    })
    
}