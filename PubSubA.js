function PubSub(){
    this.eventObj = {};
}

// {"onclick":[],"mousemove":[]}
PubSub.prototype = {
    constructor : PubSub,
    //订阅的方法
    addEvent : function(eventName, fn){

        if(typeof(fn) == "function"){
            if(this.eventObj[eventName] != undefined){
                this.eventObj[eventName].push(fn);
            } else {
                this.eventObj[eventName] = [];
                this.eventObj[eventName].push(fn);
            }
        }
    },
    removeEvent : function(eventName){
        this.eventObj[eventName] = null;
        delete(this.eventObj[eventName]);
    },
    //触发,只需要执行这个 trigger 就能执行 某一个数组里所有的 函数
    trigger : function(eventName){

        //arguments 是一个特殊的数组
        // arguments==["onclick","100","200"];

        var argms = Array.prototype.slice.call(arguments, 1);

        console.log(this.eventObj[eventName]);
        if(this.eventObj[eventName] == undefined || this.eventObj[eventName].length == 0){
            return;
        }
        for(var key  in this.eventObj[eventName]){

            this.eventObj[eventName][key](argms);
        }
    },
}


function Person(){
    this.name = "abc";
    this.slice = function(){

    }
}

function Student(){
    Person.call(this)
}