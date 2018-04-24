function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}


function move(obj,json) {
    clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        var tf=true
        for(var key in json){
            var target=parseInt(json[key])  //目标值
            var now_value=parseInt(getstyle(obj,key))  //当前值
            var step=(target-now_value)/10       //步长
            step=step>0? Math.ceil(step):Math.floor(step)  //步长取整
            obj.style[key]=now_value+step    //新的值
            if(parseInt(getstyle(obj,key))!=target){
                tf=false
            }
        }
        if(tf==true){
            clearInterval(obj.timer)
        }
    })
}


function Mysrcoll() {
    if(window.pageYOffset){
        return {
            "left":window.pageXOffset,
            "top":window.pageYOffset
        }
    }
    if(document.compatMode=="CSS1compat"){
        return
    }
}