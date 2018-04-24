// name=value;[expires=date];[path=路径];[domain=域名];[secure]
function Cookie(key,value,time,path,domain,secure) {
    var str=""
    if(key){
        str+=encodeURIComponent(key)+"="+encodeURIComponent(value)
    }
    if(typeof (time)=="number"){
        var date=new Date()
       date.setDate(date.getDate()+time)
        str+=";expires="+date
    }
    if(path){
        str+=";path="+path
    }
    if(domain){
        str+=";domain="+domain
    }
    if(secure){
        str+=";secure"
    }
    document.cookie=str
    return document.cookie
}


function getCookie(key) {
    var styCookie=document.cookie
    var arr=styCookie.split(";")  //[ky1=aaa  ky2=bbbb]
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split("=")
        if(decodeURIComponent(arr1[0].trim())==key){
            return  decodeURIComponent(arr1[1])
        }
    }
    return ""
}

function remove(key) {
    Cookie(key,"",-1)
}