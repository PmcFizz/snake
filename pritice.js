/**
 * Created by FizzPang on 2017/9/5.
 */
var isPalindrome = function (x) {
    var reSt = x.toString().split("").reverse().join("");
    return x == reSt;
}

// console.log(isPalindrome(-27483648));

var romanToInt = function (s) {
    var sum = 0;
    var romanToIntObj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    //var arr = ["I", "V", "X", "L", "C", "D", "M"];
    for (let i = 0; i < s.length; i++) {
        let firstItem = romanToIntObj[s[i]];
        let nextItem = romanToIntObj[s[i + 1]];
        if (firstItem < nextItem) {
            sum = sum - firstItem;
        } else {
            sum = sum + firstItem;
        }
    }
    return sum;
}

// console.log(romanToInt("MCMXCVI"));

//二分法获得值
let halfHandle = (one, two, big) => {
    if (big.indexOf(one) === 0) {


    } else {

    }
}

//从两个长短字符串中获取前缀
let getPreFormTwo = (small, big) => {
    if (big.indexOf(small) === 0) {
        return small;
    } else {

        halfHandle(one, two, big);

        var halflen = parseInt(small.length / 2, 10);
        var one = small.substr(0, halflen);
        var two = small.substr(halflen + 1);
        if (big.indexOf(one) === 0) {

        } else {

        }
    }

};

//查找字符串数组中的最长前缀
var longestCommonPrefix = function (strs) {
    //先找到最短的元素
    strs.sort(function (one, two) {
        if (one.length == two.length) return 0;
        return one.length < two.length ? -1 : 1;
    });

    var returnStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let q = returnStr.length; q > 0; q--) {
            console.log(returnStr);
            var item = returnStr.substring(0, q);
            if (strs[i].indexOf(item) === 0) {
                break;
            } else {
                returnStr = returnStr.substring(0, q - 1);
            }
        }
    }
    return returnStr;
};

let arr = ["abcdef", "abcd", "ade", "abc", "abef"];
// longestCommonPrefix(arr);


//判断一个字符串中的(){}[]是否是成对出现并且顺序正确
var isValid = function (s) {
    var oneArr = s.split("");
    var len = oneArr.length;
    if (len % 2 !== 0) {
        return false;
    }
    var halfLen = parseInt(len / 2, 10);
    var retuFlag = false;
    var markObj = {'{': '}', '[': ']', '(': ')'};

    for (let i = 0; i < halfLen; i++) {
        if (markObj[oneArr[i]] !== oneArr[parseInt(len - i, 10)]) {
            retuFlag = false;
            break;
        }
    }
    return retuFlag;
};

console.log(isValid("()"));