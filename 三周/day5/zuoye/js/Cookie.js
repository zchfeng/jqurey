// name=value;[expires=date];[path=路径];[domain=域名];[secure]

function setCookie(key,value,time,path,domain,secure){
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
    return  document.cookie
}

function getCookie(key) {
     var str=document.cookie  //key1=aaa; key2=bbb
     var arr=str.split(";")  //[key1=aaa, key2=bbb]
    for(var i=0;i<arr.length;i++){
         var arr1=arr[i].split("=")//[key1,aaa][ key2,bbb]
             if(decodeURIComponent(arr1[0].trim())==key){
                 return decodeURIComponent(arr1[1])
             }
        }
   return ""
}

function removeCookie(key) {
    setCookie(key,"",-1)
}