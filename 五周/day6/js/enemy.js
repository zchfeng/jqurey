function Enemys() {  //敌人飞机  多架
this.ele=document.createElement("div")//创建
    this.id=parseInt(Math.random()*1000)  //飞机编号  (加入引擎组  和从引擎组删除)
    gameEngine.ele.appendChild(this.ele)  //加入页面
    gameEngine.enemys[this.id]=this
    var num=Math.random()   //判断出各种型号的几率
    if(num<0.6){
        this.ele.className="enemy-small"  //机型
        this.ele.type=3   //型号
        this.ele.hp=100                       //血量
        this.ele.sudu=100                     //速度
    }
    if(num>=0.6&&Math.random()<0.9){
        this.ele.className="enemy-middle"  //机型
        this.ele.type=4
        this.ele.hp=200                       //血量
        this.ele.sudu=200                    //速度
    }
    if(num>=0.9){
        this.ele.className="enemy-large"  //机型
        this.ele.type=6
        this.ele.hp=300                       //血量
        this.ele.sudu=300                     //速度
    }
    this.ele.style.left=Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth)+"px"
    this.ele.style.top=(-this.ele.offsetHeight)+"px"
    this.fly=function () {   //下移
        this.ele.timer=setInterval(function () {
            this.ele.style.top=this.ele.offsetTop+20+"px"
            if(this.ele.offsetTop>=gameEngine.ele.offsetHeight){
                clearInterval(this.ele.timer)
                this.ele.remove()
                delete(gameEngine.enemys[this.id])
            }
        }.bind(this),this.ele.sudu)
    }
    this.boom=function () {
        var end=0
        this.ele.timer2=setInterval(function () {
            end++
            if(this.ele.type==3){
                this.ele.style.backgroundImage = `url(images/plane1_die${end}.png)`
            }
            if(this.ele.type==4){
                this.ele.style.backgroundImage=`url(images/plane1_die${end}.png)`
            }
            if(this.ele.type==6){
                this.ele.style.backgroundImage=`url(images/plane1_die${end}.png)`
            }
            if(end=this.ele.type){
                clearInterval(this.ele.timer2)
                this.ele.remove()
                delete(gameEngine.enemys[this.id])
            }
        }.bind(this),100)
    }
    this.hret=function () {
        console.log(111);
        this.ele.hp-=50
        if(this.ele.hp<=0){
            this.boom()
            if(this.ele.type==3){
                gameEngine.sum(100)
            }
            if(this.ele.type==4){
                gameEngine.sum(200)
            }
            if(this.ele.type==6){
                gameEngine.sum(300)
            }
        }
    }
}

