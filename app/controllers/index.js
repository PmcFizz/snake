/**
 * Created by Fizz on 2016/12/6.
 */
var router = require('express').Router();

//index首页
router.get('/', function (req, res) {
    if(req.cookies.userid){
        res.render('index', {title: 'Express'});
    }else{
        res.render('user/login', {title: '请先登录'});
    }
});

router.post('/query', function (req, res) {
    var data = ['Moring', 'Tom', 'Jack', 'Mot', 'Saturday'];
    return returnSUCCESS(res, data);
});

//进入zTrr实例页面
router.get('/ztree',function (req,res) {
    res.render('zTree/index');
});

//进入七巧板页面
router.get('/tangrampuzzle',function(req,res){
    res.render('tangrampuzzle/index');
});

//进入threedubmedia 事例
router.get('/threedubmedia',function(req,res){
    res.render('tangrampuzzle/pluginindex')
})

module.exports = router;
