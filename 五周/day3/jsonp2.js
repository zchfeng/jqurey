function JSONP(json) {
    var jsonname="JS_"+parseInt(Math.random()*1000)
    window[jsonname]=json.callback
    var url=json.url
    url+="?"+Str(json.data)+json.cbname+"="+jsonname
    var Scr=document.createElement("script")
    Scr.src=url
    console.log(url);
    document.body.appendChild(Scr)
    Scr.onload=function () {
        this.remove()
        delete(window[jsonname])
    }
}

function Str(obj) {
    var str=""
    for (var k in obj) {
        str+=k+"="+obj[k]+"&&"
    }
    return str
}