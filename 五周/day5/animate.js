function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}

function animate(obj,json,fn) {
    clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        var tf=true
        for (var key in json) {
            console.log(getstyle(obj, key));
            console.log(json[key]);
            var target=parseInt(json[key])
            var now_val=parseInt(getstyle(obj,key))
            console.log(now_val);
            if(key=="opacity"){
                target=json[key]*100
                now_val=getstyle(obj,key)*100
            }
            var step=(target-now_val)/10
            step=step>0?Math.ceil(step):Math.floor(step)
            console.log(step);
            if(key=="opacity"){
                obj.style.opacity=(now_val+step)/100
            }else if(key=="zIdex"){
                obj.style.zIdex=json[key]
            }else{
                obj.style.opacity=now_val+step+"px"
            }
            if(now_val!=target){
                tf=false
            }
        }
        if(tf){
            clearInterval(obj.timer)
            if(typeof (fn)=="function"){
                fn(obj)
            }
        }
    },40)
}
