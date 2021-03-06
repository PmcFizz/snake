/**
 *公共的抓包工具 只用于单页面抓取图片
 *2017年8月11日15:31:40
 */
let superagent = require("superagent");
let fs = require("fs");
let cheerio = require("cheerio");
let async = require("async");
let http = require("http");
let request = require("request");

const downloadFoild = "E:/Web_spiders/";

const setData = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com',
    'Content-Type': 'text/plain; charset=UTF-8'
};

let docuTitle = "默认title";

//发起图片下载请求
let getImgFileBySrc = (src, name, cb) => {
    fs.exists(downloadFoild + docuTitle, function (res) {
        if (!res) {
            fs.mkdirSync(downloadFoild + docuTitle);
        }
        request.head(src, function (err) {
            request(src).pipe(fs.createWriteStream(downloadFoild + docuTitle + "/" + name + ".jpg"));
        });
    });
    cb(null, null);
};

//并发下载图片保存
let asyncLoadImg = (arr) => {
    async.mapLimit(arr, 5, (img, cb) => {
        getImgFileBySrc(img.imgsrc, img.imgname, cb);
    }, (err, res) => {
        if (err) console.log("" + err.message);
        console.log("抓取完毕,文件保存地址为:__" + downloadFoild + docuTitle);
    });
};

//程序主入口
let mainFun = (target_url, selector) => {
    superagent.get(target_url)
        .set(setData)
        .end((err, res) => {
            if (err) {
                console.log("获取目标地址内容错误____" + err.message);
                return;
            }
            let $ = cheerio.load(res.text);
            docuTitle = $("title").text();
            let selectorArr = $(selector);
            let imgArr = [];
            for (let i = 0; i < selectorArr.length; i++) {
                let item = $(selectorArr[i]);
                let imgsrc = item.attr('src');
                let imgname = item.attr('title') ? item.attr('title') : i;
                imgArr.push({imgsrc: imgsrc, imgname: imgname});
            }
            asyncLoadImg(imgArr);
        })
};

mainFun('https://baike.baidu.com/article/465f421a9d2ca9bbf0492271.htm', '.text-box img');