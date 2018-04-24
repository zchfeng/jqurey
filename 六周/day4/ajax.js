function createXhr() {
    if(window.XMLHttpRequest){
        return new window.XMLHttpRequest()
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
}

function Ajax(json) {

}