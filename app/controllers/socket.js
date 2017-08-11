/**
 * Created by FizzPang on 2017/8/11.
 */
var router = require('express').Router();

//socket主页面
router.get('/index', function (req, res) {
    res.render('socket/index');
});

module.exports=router;