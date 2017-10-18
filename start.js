// 抓取拉勾网招聘信息

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;
let superagent = require('superagent');
let cheerio = require('cheerio');
let async = require('async');
const setData = {
    'Host': 'www.lagou.com',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate,sdch, br',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Cookie': 'user_trace_token=20170603162959-264ab0a065f644f790dd1748786fcf27; LGUID=20170603162959-d4c059b6-4836-11e7-9737-5254005c3644; JSESSIONID=ABAAABAACDBABJB3E7AC7AB5E78E15B61593E7824A580AF; PRE_UTM=; PRE_HOST=www.google.com; PRE_SITE=https%3A%2F%2Fwww.google.com%2F; PRE_LAND=https%3A%2F%2Fwww.lagou.com%2F; ab_test_random_num=0; _gat=1; _putrc=537084309D9B2D17; login=true; unick=%E5%BC%A0%E4%B8%96%E5%BC%BA; showExpriedIndex=1; showExpriedCompanyHome=1; showExpriedMyPublish=1; hasDeliver=16; TG-TRACK-CODE=index_navigation; LGSID=20170604121804-cde500a7-48dc-11e7-9798-5254005c3644; LGRID=20170604122351-9d14df1f-48dd-11e7-9798-5254005c3644; _ga=GA1.2.1556911984.1496478599; _gid=GA1.2.1805336829.1496478599; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1496549884,1496549975,1496550053,1496550198; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1496550232; SEARCH_ID=c4c755ab1d4446479ba4bad9672560a8; index_location_city=%E5%85%A8%E5%9B%BD'
};

const zpInfo = mongoose.model('zpInfo', new Schema({
    title: String, //招聘标题
    time: String,  //发布时间
    require: String, //岗位要求
    companyname: String, //公司名称
    companysize: String //公司规模
}))
mongoose.connect('mongodb://localhost/zp', function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("^_^数据库已连接...请开始你的表演^_^")
    }
});

// 发起http请求
let createHttp = () => {
    superagent.post('https://www.lagou.com/jobs/positionAjax.json?px=default&city=%E6%B7%B1%E5%9C%B3&district=%E5%8D%97%E5%B1%B1%E5%8C%BA&needAddtionalResult=false')
        .set(setData)
        .send({first: true, pn: 1, kd: 'web前端'})
        .query({px: 'default', city: '深圳', district: '南山区', needAddtionalResult: false, isSchoolJob: 0})
        .end((err, res) => {
            if (err) {
                console.log("获取目标地址出错__" + err.message);
                return;
            }
            var resJson=JSON.parse(res.text);
            //不行啊 有反爬机制
            console.log(resJson.msg);
            // console.log(res.text);
            return;


        })

}

createHttp();

let tempZp = new zpInfo({
    title: "11",
    time: "11",
    require: "11",
    companyname: "11",
    companysize: "11",
})
tempZp.save();
console.log("已保存到数据库^_^");
