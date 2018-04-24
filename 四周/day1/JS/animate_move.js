/**
 *
 * @param {obj DOM}obj
 * @param {number} target
 * @param {number}stp
 */
function move(obj,target,stp) {
    clearInterval(obj.timer)
    var walk=obj.offsetLeft>target ? -stp:stp
     obj.timer=setInterval(function () {
      obj.style.left=obj.offsetLeft+walk+"px"
      if(Math.abs(obj.offsetLeft-target)<=stp){
       clearInterval(obj.timer)
       obj.style.left=target+"px"
      }
    },40)
}