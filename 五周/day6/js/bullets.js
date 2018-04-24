function Bullets() {
    this.ele=document.createElement("div")
    this.id=parseInt(Math.random()*1000)
    gameEngine.ele.appendChild(this.ele)
    gameEngine.bullets[this.id]=this
    this.ele.className="bullet"
    this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2+"px"
    this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px"
    this.sudu=200  //子弹移动速度
    this.move=function () {
        this.ele.timer=setInterval(function () {
            this.ele.style.top=this.ele.offsetTop-50+"px"
            if(this.ele.offsetTop<=10){
                clearInterval(this.ele.timer)
                this.boom()
            }
        }.bind(this),this.sudu)
    }
    this.boom=function () {
        this.ele.className="bullet-die"
        var pic=0
        this.ele.timer2=setInterval(function () {
            pic++
            this.ele.style.backgroundImage=`url(images/die${pic}.png)`;
            if(pic==2){
                clearInterval(this.ele.timer2)
                this.ele.remove()
                delete (gameEngine.bullets[this.id])
            }
        }.bind(this),200)
    }
}