var superagent = require("superagent");
var cheerio = require("cheerio");
var async = require('async')
var fs= require('fs')
var setData = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com',
    'Content-Type': 'text/plain; charset=UTF-8'
}

let tagArr=[]

let findPoetry=[]
let handleTag=(arr)=>{
    async.mapLimit(arr,5,function(item,cb){
         superagent.get(item.link)
            .set(setData)
            .end(function (err, res) {
                // console.log(res.text)
                var $ = cheerio.load(res.text);
                var poetryArr = $(".sons .cont")
                poetryArr.each((i,item)=>{
                    let $item=$(item)
                    if($item.find(".contson").text()){
                        let poetryObj={
                            title: $item.find(".yizhu").next().text(),
                            dynasty:$item.find(".source a").eq(0).text(),
                            author:$item.find(".source a").eq(1).text(),
                            content:$item.find(".contson").text(),
                        }
                         findPoetry.push(poetryObj)
                    }
                   
                })
                cb(null)
            })
    },function(err,res){
    
        if(!err){console.log("下载成功")}
           
            fs.writeFile('Poetry.json', JSON.stringify({findPoetry}), function (err) {
                if (err) {
                    console.log("写入目录树错误。。。" + err.message);
                } else {
                    console.log("写入目录树完成！");
                }
            });
    })
}

let runMain = () => {
    var baseUrl = "http://so.gushiwen.org/shiwen/tags.aspx";
    superagent.get(baseUrl)
        .set(setData)
        .end(function (err, res) {
            var $ = cheerio.load(res.text);
            var poetryArr = $(".bookcont a")
            poetryArr.each(function(i,item){
                tagArr.push({tagName:$(item).text(),link:$(item).attr('href')})            
            })
            handleTag(tagArr)
            //console.log(JSON.stringify({tagArr}))
        })
}

runMain()