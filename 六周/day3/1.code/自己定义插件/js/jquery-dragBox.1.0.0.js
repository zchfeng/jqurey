(function(jQuery){

    jQuery.fn.dragbox = function(){
        
        function DragBox(){
            this.ele = null;
            this.init = function(obj){
                this.ele = obj;// obj就是DOM对象 就是盒子
                return this;
            }
            this.moveStart = function(){
                var sefl = this;
                this.ele.onmousedown = function(evt){
                    var e = evt || window.event;
                    var disX = e.offsetX;
                    var disY = e.offsetY;

                    sefl.moveIng(disX, disY);
                    sefl.moveEnd();

                }

            }
            this.moveIng = function(x, y){
                var self = this;
                document.onmousemove = function(evt){
                    var e = evt || window.event;
                    self.ele.style.left = e.clientX - x + "px"
                    self.ele.style.top = e.clientY - y + "px"
                }
            }
            this.moveEnd = function(){
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }

        }
        var drag = new DragBox();
        drag.init(this[0]).moveStart();
        return drag;

    }

})(jQuery)