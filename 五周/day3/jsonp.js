/**
 * json{
 * url:XXXX
 * data:{}
 * cbname:
 * callback:
 * }
 * @param json
 * @constructor
 */
function JSONP(json) {
    var fnname="js_"+parseInt(Math.random()*1000)
    window[fnname]=json.callback
    var url=""
    url+=json.url+"?"+Str(json.data)+json.cbname+"="+fnname
    var oscr=document.createElement("script")
    console.log(oscr);
    oscr.src=url

    document.body.appendChild(oscr)
    oscr.onload=function () {
        this.remove()
        delete(window[fnname])
    }
    function Str(obj) {
        var str=""
        for (var key in obj){
            str+=key+"="+obj[key]+"&&"
        }
        return str
    }

}