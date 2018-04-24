// name=value;[expires=date];[path=路径];[domain=域名];[secure]
/**
 *
 * @param {String}key
 * @param {String}value
 * @param {Number}time
 * @param {String}path
 * @param {String}domain
 * @param {Boolean}secure
 * @returns {*|string}
 */
function setCookie(key, value, time, path, domain, secure) {
    var str = ""   //建一个空字符串
    if (key) {//判断有误key  有就添加进去
        str += encodeURIComponent(key) + "=" + encodeURIComponent(value)
    }
    if (typeof (time) == "number") {
        var date = new Date()
        date.setDate(date.getDate() + time)
        str += ";expires=" + date
    }
    if (path) {
        str += ";path=" + path
    }
    if (domain) {
        str += ";domain=" + domain
    }
    if (secure) {
        str += ";secure"
    }
    document.cookie = str
    return document.cookie
}

/**
 *
 * @param {String}key
 * @returns {*}
 */
function getCookie(key) {
    var str = document.cookie  //活动现在COOKIE  key1=aaaa; key2=bbbb
    var arr = str.split(";")   //[key1=aaaa][ key2=bbbb]
    for (var i = 0; i < arr.length; i++) {//遍历
        var arr1 = arr[i].split("=")  //[key1][aaaa]    [ key2][bbbb]
        if (decodeURIComponent(arr1[0].trim()) == key) {
            return decodeURIComponent(arr1[1])
        }
    }
    return ""
}

/**
 *
 * @param {string}key
 */
function removeCookie(key) {
    console.log(key);
    setCookie(key, "", -1)
}