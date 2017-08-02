/**
 * Created by FizzPang on 2017/8/2.
 */
var tool = tool || {};
tool.getHref = function (string) {
    var reg = new RegExp("(^|&)" + string + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r)return decodeURI(r[2]);
    return false;
}