function animate(obj,target,step) {
      clearInterval(obj.timer)
       var  walk=obj.offsetLeft<target ? step:-step;
        obj.timer=setInterval(function () {
        obj.style.left=obj.offsetLeft+walk+"px";
        if(Math.abs(obj.offsetLeft-target)<=step){
            clearInterval(obj.timer)
            obj.style.left=target+"px"
        }
    },40)
}


// function animate(obj,target) {
//     clearInterval(obj.timer)
//     step=
// }