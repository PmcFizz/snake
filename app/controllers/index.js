/**
 * Created by Fizz on 2016/12/6.
 */
var router = require('express').Router();

//index首页
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.post('/query', function (req, res) {
    var data = ['Moring', 'Tom', 'Jack', 'Mot', 'Saturday'];
    return returnSUCCESS(res, data);
});

//进入我的测试页面
router.get('/index', function (req, res) {
    res.render('my');
});

router.get('/home',function (req,res) {
    res.render('my');
});

//进入zTrr实例页面
router.get('/ztree',function (req,res) {
    res.render('zTree/index');
})

module.exports = router;
