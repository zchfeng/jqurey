// name=value;[expires=date];[path=路径];[domain=域名];[secure]
/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Number} day
 * @param {String} path
 * @param {String} domain
 * @param {boolean}secure
 * @constructor
 */
//设置Cookie
function Cookie(key,value,time,path,domain,secure) {
    var strCookie=""
         if(key){
             strCookie+=encodeURIComponent(key)+"="+encodeURIComponent(value)
         }
         if(typeof(time)=="number" ){
             var date=new Date()
             date.setDate(date.getDate()+time)
             strCookie+=";expires="+date
         }
        if(path){
            strCookie+=";path="+path
        }
        if(domain){
            strCookie+=";domain="+domain
        }
        if(secure){
            strCookie+=";secure"
        }
        return  document.cookie=strCookie
}


/**
 *
 * @param {string}key
 * @returns {string}
 */
//获取key内容
function getCookie(key) {
    var strCookie=document.cookie  //key1=aaaa; key2=bbb
    var arr=strCookie.split(";")
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split("=")
        if(decodeURIComponent(arr1[0].trim())==key){
            return decodeURIComponent(arr1[1])
        }
    }
    return ""
}
//删除cookie
function removeCookie(key) {
    Cookie(key,"",-1)
}