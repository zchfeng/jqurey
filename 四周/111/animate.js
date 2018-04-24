function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}


function animate(obj,json,fn) {
    clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        for(var k in json){
            var target=parseInt(json[k])
            var now_vle=parseInt(getstyle(obj,k))
            if(k="opacity"){
                target=json[k]*100
                now_vle=getstyle(obj,k)*100
            }
            var step=target-now_vle
            step
        }
    })
}