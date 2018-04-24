(function ($) {
    $.extend({
        // name=value;[expires=date];[path=路径];[domain=域名];[secure]
            setCookie:function (key,value,time,path,domain,secure) {
                var str=""
                if(key){
                    str+=encodeURIComponent(key)+"="+encodeURIComponent(value)
                }
                if(typeof (time)=="number"){
                    var date=new Date()
                    date.setDate(date.getDate()+time)
                    str+=";expires="+date
                }
                // if(typeof(time)=="number" ){
                //     var date=new Date()
                //     date.setDate(date.getDate()+time)
                //     str+=";expires="+date
                // }
                if(path){
                    str+=";path="+path
                }
                if(domain){
                    str+=";domain="+domain
                }
                if(secure){
                    str+=";secure"
                }
                console.log(str);
                document.cookie=str
                return document.cookie
            },

            getCookie:function (key) {
                var str=document.cookie  //a1=aaaa; a2=bbbbb
                var arr=str.split(";")   //[a1=aaaa]  [ a2=bbbb]
                for (var i = 0; i <arr .length; i++) {
                    var arr1=arr[i].split("=")   //[a1 aaa]  [ a2 bbbb]
                    if(decodeURIComponent(arr1[0].trim())==key){
                        return decodeURIComponent(arr1[1])
                    }
                }
                return ""
            },

            removeCookie:function (key) {
                this.setCookie(key,"",-1)
            }

    })
})(jQuery)