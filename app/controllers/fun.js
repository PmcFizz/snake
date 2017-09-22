/**
 * Created by Administrator on 2016/12/7.
 */
var router = require('express').Router();
var plan=require(PROXY).plan;

//canvas视图
router.get('/canvas', function (req, res) {
    res.render('fun/canvas');
});

module.exports = router;
