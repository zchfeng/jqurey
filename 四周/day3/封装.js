function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}


function move(obj,json,fn) {
       clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        var tf=true
        for (var key in json) {
            var target=parseInt(json[key])
            var now_val=parseInt(getstyle(obj,key))
            if(key=="opacity"){
                target=json[key]*100
                now_val=getstyle(obj,key)*100
            }
            var step=(target-now_val)/10
            step=step>0? Math.ceil(step):Math.floor(step)
            if(key=="opacity"){
                obj.style.opacity=(now_val+step)/100
            }if(key=="zIndex"){
                obj.style.zIndex=json[key]
            }else{
                obj.style[key]=now_val+step+"px"
            }
            if(now_val!=target){
                tf=false
            }
        }
        if(tf){
            clearInterval(obj.timer)
            fn(obj)
        }
    })
}


function Myscroll() {
    if(window.pageYOffset){
       return {
           "left":window.pageXOffset,
           "top":window.pageYOffset
       }
    }
    if(document.compatMode=="CSS1compat"){
        return {
            "left":document.documentElement.scrollLeft,
            "top":document.documentElement.scrollTop
        }
    }
    return {
        "left":document.body.scrollLeft,
        "top":document.body.scrollTop
    }
}