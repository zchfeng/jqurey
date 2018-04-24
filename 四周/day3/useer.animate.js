function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}


function animate(obj,json,fn) {
    clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        var  tf=true   //统计是否都完成
        for (var key in json) {
            var target=parseInt(json[key])//目标值
            var now_value=parseInt(getstyle(obj,key))//现在值
            if(key=="opacity"){
              target=json[key]*100
              now_value=getstyle(obj,key)*100
            }
            var step=(target-now_value)/10   //步长
            step=step>0? Math.ceil(step):Math.floor(step) //步长取整
            if(key=="zIndex"){
                obj.style.zIndex=json[key]
            }
            if(key=="opacity"){
                obj.style.opacity=(now_value+step)/100
            }else{
                obj.style[key]=now_value+step+"px"  //新位置
            }
            if(now_value!=target){
                tf=false
            }
        }
        if(tf==true){
            clearInterval(obj.timer)
            if(typeof(fn)=="function" ){
                fn(obj)
            }
        }
    },40)
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