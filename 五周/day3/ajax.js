function CreateXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
}


function Ajax(json) {
    var xhr = CreateXHR()
    json.type == undefined ? json.type = "post" : json.type
    json.async == undefined ? json.async = "trun" : json.async
    if (json.type == "post") {
        xhr.open("post", json.url)
        xhr.send(str(json.data))
    } else {
        xhr.open("post", json.url + "?" + str(json.data))
        xhr.send(null)
    }
    if(json.async){
    var p = new Promise(function (success, error) {
            xhr.onreadystatechange = function () {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    success(xhr.responseText)
                }
                if (xhr.status != 200) {
                    error(xhr.status)
                }
            }
        })} else {
        var p = new Promise(function (success, error) {
            if (xhr.status == 200) {
                success(xhr.responseText)
            }
            if (xhr.status != 200) {
                error(xhr.status)
            }
        }
        )}
    return p
}


function str(obj) {
    var str = ""
    for (var key in obj) {
        str += key + "=" + obj[key] + "&&"
    }
    return str
}