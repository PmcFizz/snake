// 使用定时器监听神盾局特工的更新
var superagent = require("superagent");
var cheerio = require("cheerio");
var setData = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com',
    'Content-Type': 'text/plain; charset=UTF-8'
}
let runMain = () => {
    var baseUrl = "http://www.dytt8.net/html/tv/oumeitv/20171202/55685.html";
    var pro = new Promise((resolve, reject) => {
        superagent.get(baseUrl)
            .set(setData)
            .end(function (err, res) {
                var $ = cheerio.load(res.text);
                var movieArr = $("#Zoom table")
                console.log("神盾局特工现有集数————" + new Date() + '*****' + movieArr.length)
                resolve()
            })
    })
    pro.then(function () {
        setTimeout(runMain, 3000)
    })
}

runMain()
// setInterval(runMain, 1000)