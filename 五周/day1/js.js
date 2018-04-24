function CreatXTR() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
}

function ajax(url,callback) {
    var xtr=CreatXTR()
    xtr.open("get",url)
    xtr.send(null)
    xtr.onreadystatechange=function () {
        if(xtr.status==200&&xtr.readyState==4){
            if(callback){
                callback(xtr.responseText)
            }
        }
    }
}