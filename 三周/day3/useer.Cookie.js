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
function setCookie(key,value,day,path,domain,secure) {
    var strCookie=""
    if(key){
        strCookie+=encodeURIComponent(key)+"="
    }
    if(value){
        strCookie+=encodeURIComponent(value)
    }
    if(typeof(day) == "number"){
        var date=new Date()
       date.setDate(date.getDate()+day)
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
        var strCookie=document.cookie  //key1=aaaa; key2=bbbb
        var arr=strCookie.split(";")  //[key1=aaaa, key2=bbbb]
        for(var i=0;i<arr.length;i++){
          var arr1=arr[i].split("=")  //[key1,aaaa]
            if(decodeURIComponent(arr1[0].trim())==key){
              return decodeURIComponent(arr1[1])
            }
        }
        return ""
    }


 */
    //删除cookie
          function removeCookie(key) {
              setCookie(key, "", -1)
          }