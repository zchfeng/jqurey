//公共方法

//碰撞检测
//飞机 obj           敌   子
function crashTest(obj1,obj2){
	// obj1.ele   飞机div 飞机节点
	// 水平的位移
	var  leftSide = obj1.offsetLeft - obj2.offsetWidth/2;
	var  rightSide = obj1.offsetLeft + obj1.offsetWidth + obj2.offsetWidth/2;

	var midX = obj2.offsetWidth/2 +obj2.offsetLeft;
	//垂直方向
	var  topSide = obj1.offsetTop - obj2.offsetHeight/2;
	var  bottomSide = obj1.offsetTop + obj1.offsetHeight + obj2.offsetHeight/2;

	var midY = obj2.offsetHeight/2 +obj2.offsetTop;

	if(leftSide<midX && rightSide> midX && topSide<midY && bottomSide>midY){
		return true;
	}else{
		return false;
	}
	// var midX1=obj1.offsetLeft+obj1.offsetWidth/4-obj2.offsetLeft-obj2.offsetWidth+obj2.offsetWidth/4
    // var midX2=obj2.offsetLeft+obj2.offsetWidth/4-obj1.offsetLeft-obj1.offsetWidth+obj1.offsetWidth/4
    // var midY1=obj1.offsetTop+obj1.offsetHeight/4-obj2.offsetTop-obj2.offsetHeight+obj2.offsetHeight/4
    // var midY2=obj2.offsetTop+obj2.offsetHeight/4-obj1.offsetTop-obj1.offsetHeight+obj1.offsetHeight/4
    // console.log(midX1, midX2);
    // console.log(midY1, midY2);
    // console.log((midX1 < 0 || midX2 < 0) && (midY1 < 0 || midY2 < 0));
    // if((midX1<0||midX2<0)&&(midY1<0||midY2<0)){
     //    console.log("碰撞");
     //    return true
	// }else {
     //    console.log("不碰撞");
	// 	return false
	// }
}
