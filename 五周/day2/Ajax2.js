function CreateXHR() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }
    return ActiveXObject("Msxml2.XMLHTTP")
}


function Ajax(json) {
    var xhr=CreateXHR()
    json.type==undefined? json.type="post":json.type
    json.async==undefined? json.async=true:json.type
    if(json.type=="get"){
        xhr.open(json.type,json.url+"?"+str(json.data),json.async)
        xhr.send(null)
    }
    if(json.type=="post"){
        xhr.open(json.type,json.url,json.async)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(str(json.data))
        console.log(str(json.data));
    }
    if(json.async){
        var p=new Promise(function (success,error) {
            xhr.onreadystatechange=function () {
                if(xhr.status==200&&xhr.readyState==4) {
                    console.log(xhr.responseText);
                    success(xhr.responseText)
                }
                if(xhr.status!=200){
                    error(xhr.status)
                }
            }})
    }else{
        var p=new Promise(function (success,error) {
                if(xhr.status==200) {
                    success(xhr.responseText)
                }
                if(xhr.status!=200){
                    error(xhr.status)
                }
            })
    }

    return p
}

function str(obj) {
    var str=""
    for (var key in obj) {
        str+=key+"="+obj[key]+"&&"
    }
    return str
}