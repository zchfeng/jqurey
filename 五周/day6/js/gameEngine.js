gameEngine={}//创建游戏引擎(1个)
gameEngine.ele=null
gameEngine.init=function (id) {   //绑定界面
    this.ele=document.getElementById(id)
    return this
}
gameEngine.enemys=[]  //敌军组
gameEngine.bullets=[]   //子弹组
gameEngine.start=function (difficulty) {  //游戏开始
    var logo=document.createElement("div")
    logo.className="logo"
    this.ele.appendChild(logo)
    gameEngine.loading(difficulty)
}
gameEngine.loading=function (difficulty) {   //游戏等待
    var loading=document.createElement("div")
    loading.className="loading"
    this.ele.appendChild(loading)
    var num=0
   var timer= setInterval(function () {
        num++
        loading.style.background=` url(images/loading${num%3+1}.png) no-repeat`;
        if(num==5){
            clearInterval(timer)
            gameEngine.ele.innerHTML=""
            myPlane.init()
            gameEngine.key()
            gameEngine.sum(0)
            gameEngine.bg()
            setInterval(function () {
                new Enemys().fly()
            },1000)
            setInterval(function () {
                new Bullets().move()
            },difficulty)
            gameEngine.isBoom()
        }
    },200)
}
gameEngine.key=function () {
    document.onkeydown=function (evt) {   //飞机移动
    var e=evt||window.event
    if(e.keyCode==37){
        myPlane.move1(-20)
    }
    if(e.keyCode==38){
        myPlane.move2(-20)
    }
    if(e.keyCode==39){
        myPlane.move1(20)
    }
    if(e.keyCode==40){
        myPlane.move2(20)
    }
}
}
gameEngine.isBoom=function () {
    var timer=setInterval(function () {
        for(var en_key in gameEngine.enemys){
            if(crashTest(myPlane.ele,gameEngine.enemys[en_key].ele)){
                clearInterval(timer)
                console.log("本机和敌军");
                myPlane.boom()
            }
        }
        for(var en_key in gameEngine.enemys){
        for(var bu_key in gameEngine.bullets){
            if(crashTest(gameEngine.bullets[bu_key].ele,gameEngine.enemys[en_key].ele)){
                gameEngine.enemys[en_key].hret()
                gameEngine.bullets[bu_key].ele.remove()
                delete (gameEngine.bullets[bu_key])
                return
            }
        }
    }

    })
}
All=0
gameEngine.sum=function (score) {
    All+=score
    var oscore=document.createElement("div")
    oscore.className="score"
    gameEngine.ele.appendChild(oscore)
    oscore.innerHTML=All
}
gameEngine.bg=function () {
    var position=0
    setInterval(function () {
        position++
        this.ele.style.background=`url(images/bg.jpg) repeat-y 0 ${position}px`
    }.bind(this),100)
}