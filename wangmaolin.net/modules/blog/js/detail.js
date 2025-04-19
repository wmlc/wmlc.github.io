// 文章访问数加 1 逻辑

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function checkView(cmid) {
    comIds = getCookie('viewIds')
    if (comIds != null && comIds != "") {
        comArr = comIds.split(",");
        for (i = 0; i < comArr.length; i++) {
            if (comArr[i] == cmid) {
                return true;
            }
        }
    }
    return false;
}

function addView(cmid) {
    comIds = getCookie('viewIds')
    if (comIds != null && comIds != "") {
        comIds = comIds + ',' + cmid;
        setCookie('viewIds', comIds, 1);
    } else {
        setCookie('viewIds', cmid, 1);
    }
}
