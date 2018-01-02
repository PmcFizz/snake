/**
 * 获取电影天堂的电影下载链接
 * 2018年1月2日19:46:33
 */
var superagent = require("superagent");
var cheerio = require("cheerio");
var setData = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com',
    'Content-Type': 'text/html; charset=gb2312'
}
let allDownHref = []

let getDownHref = (obj) => {
    new Promise((res, rej) => {
        superagent.get(obj.href)
            .set(setData)
            .end(function (err, res) {
                var $ = cheerio.load(res.text);
                var downHrefArr = $("table[align=center] a") // 获取最新发布190影视
                downHrefArr.each((i, item) => {
                    let obj = {
                        name: $(item).attr("thunderrestitle"),
                        downHref: $(item).attr("rtacjpmn")
                    }
                    allDownHref.push(obj)
                })

            })
    })
}

let handleMovieData = (arr) => {
    let i = 0;
    let len = arr.length
    while (i < len) {
        let movieDownHref = getDownHref(arr[i])
    }

}


let runMain = () => {
    var baseUrl = "http://www.dytt8.net/";
    superagent.get(baseUrl)
        .set(setData)
        .end(function (err, res) {
            var $ = cheerio.load(res.text);
            var movieArr = $(".co_content2 ul a") // 获取最新发布190影视
            let moveData = [];
            movieArr.each((i, item) => {
                let movieObj = {
                    name: $(item).text(),
                    href: baseUrl + $(item).attr('href')
                }
                moveData.push(movieObj)
            })
            handleMovieData(moveData)
            console.log(JSON.stringify({data: moveData}))

        })
}
runMain()