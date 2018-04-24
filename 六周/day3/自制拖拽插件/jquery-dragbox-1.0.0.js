(function (jQuery) {
    jQuery.fn.dragbox=function () {
        function Dragbox() {
            this.ele=null
            this.init=function (obj) {
                this.ele=obj
                return this
            }
            this.movestate=function () {
                var slef=this
                this.ele.onmousedown=function (evt) {
                    slef.ele.style.position="absolute"
                    var e=evt||window.event
                    var disX=e.offsetX
                    var disY=e.offsetY
                    slef.moveing(disX,disY)
                    slef.moveend()
                }
            }
            this.moveing=function (x,y) {
                var slef=this
                document.onmousemove=function (evt) {
                    slef.ele.style.position="absolute"
                    var e=evt||window.event
                    slef.ele.style.left=e.clientX-x+"px"
                    slef.ele.style.top=e.clientY-y+"px"
                }
            }
            this.moveend=function () {
                document.onmouseup=function () {
                    document.onmousemove=document.onmouseup=null
                }
            }
        }

        for(var i=0;i<this.length;i++){
        var position=getstyle(this[i],"position")
            var drag = new Dragbox();
            drag.init(this[i]).movestate();
            this[i].style.position=position
        }
        return drag;
    }
})(jQuery)

function getstyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}