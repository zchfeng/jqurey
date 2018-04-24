obox={
    ele:null,
    getele:function (_ele) {
        this.ele=_ele
        return this
    },
    movestart:function () {
        var shef=this
        this.onmousedown=function (evt) {
            var e=evt||window.event
            var disX=e.offsetX
            var disY=e.offsetY
            shef.moveing(disX,disY)
            shef.moveend()
        }
    },
    moveing:function (disX,disY) {
        var shef=this
        document.onmousemove=function (evt) {
            var ee=evt||window.event
            shef.style.left=ee.offsetX-disX+"px"
            shef.style.top=ee.offsetY-disY+"px"
        }
    },
    moveend:function () {
        document.onmouseup=function () {
        document.onmousemove=document.onmouseup=null
        }
    }
}