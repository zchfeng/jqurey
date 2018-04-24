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
        for(var k in json){
            var target=parseInt(json[k])
            var nowvalue=parseInt(getstyle(obj,k))
            if(k=="opacity"){
                target=json[k]*100
                nowvalue=getstyle(obj,k)*100
            }
            var step=(target-nowvalue)/10
            step= step>0? Math.ceil(step):Math.floor(step)
           if(k=="opacity") {
                obj.style.opacity=(nowvalue+step)/100
           }else if(k=="zIndex"){
                obj.style.zIndex=json[k]
           }else{
               obj.style[k]=nowvalue+step+"px"
           }
           if(nowvalue!=target){
               tf=false
           }
        }
        if(tf){
            clearInterval(obj.timer)
            if(typeof (fn)=="function"){
                fn(obj)
            }
        }
        },30)
}


function Myscroll() {
    if(window.pageYOffset){
        return {
            "left":window.pageXOffset,
            "top":window.pageYOffset
        }
    if(document.compatMode=="CSS1compat"){
            return {
                "left":document.documentElement.scrollLeft,
                "top":document.documentElement.scrollTop
            }
    return{
        "left":document.body.scrollLeft,
        "top":document.body.scrollTop
    }
    }
    }

}