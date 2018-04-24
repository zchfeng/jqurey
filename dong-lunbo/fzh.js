

function animate(obj,target){
    clearInterval(obj.timer)
    var teps=obj.offsetLeft>target?-10:10
    obj.timer=setInterval(function(){
      obj.style.left=obj.offsetLeft+teps+"px"
        if(Math.abs(obj.offsetLeft-target)<=Math.abs(teps)){
            clearInterval(obj.timer)
            obj.style.left=target+"px"
        }
    },0)
}