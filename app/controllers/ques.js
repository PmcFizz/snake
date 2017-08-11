/**
 * Created by FizzPang on 2017/8/11.
 */
let  router=require('express').Router();
let quesData=require("../../data/ques.json");

router.get('/index',function (req,res) {
    res.render('ques/index');
});

router.post('/getData',function (req,res) {
    res.json({code:200,data:quesData});
});
module.exports=router;