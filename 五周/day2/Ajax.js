//创建核心对象  XTR
function CreatXTR() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
}


// 对象模板
// obj={
//     type:,//get,post
//     url//地址
//     async//同步 异步
//     ballback//回调
//     data//对象  参数
// }
function ajax(obj) {
    var xtr=CreatXTR()
    obj.type==""? obj.type="post":obj.type
    obj.async==undefined? obj.async=true:obj.async
    if(obj.type==get){
        xtr.open("get",obj.url+"?"+para(obj.data),obj.async)
        xtr.setRequestHeader('Content-type','application/x-www-form-urlencode')
        xtr.send(null)
    }else{
        xtr.open("post",obj.url,obj.async)
        xtr.send(para(obj.data))
    }
    if(obj.async==false){
        if(xtr.status==200){
            if(obj.ballback){
                obj.ballback(xtr.responseText)
            }
        }
    }else{
        if(xtr.status==200&&xtr.readyState==4) {
            if(obj.ballback){
                obj.ballback(xtr.responseText)
            }
        }
    }
}

function para(josn) {
    var str=``
    for (var key in josn) {
        str+=`${key}"="${josn[key]}&&`
    }
    return str
}