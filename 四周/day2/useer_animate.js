function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
}
   return  ele.currentStyle[attr]
}
function animate(obj,key,target) {
    clearInterval(obj.timer)
    obj.timer=setInterval(function () {
        var step=(target-parseFloat(getstyle(obj,key)))/10
       step=step>0? Math.ceil(step):Math.floor(step)
        obj.style[key]=parseFloat(getstyle(obj,key))+step+"px"
        if(parseFloat(getstyle(obj,key))==target){
            clearInterval(obj.timer)
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

