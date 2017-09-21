/**
 * Created by Administrator on 2016/12/7.
 */
var router = require('express').Router();
var plan=require(PROXY).plan;

//添加计划页面
router.get('/add', function (req, res) {
    res.render('plan/add');
});

//计划列表页面
router.get('/plans', function (req, res) {
    res.render('plan/plans')
});

//编辑计划页面
router.get('/edit',function(req,res){
    res.render('plan/edit')
});

//查看我的工作计划
router.get('/workview',function (req,res) {
    res.render("plan/workview");
});

//工作学习计划
router.get('/workstudy',function (req,res) {
    res.render("plan/workstudy");
});

//添加计划api
router.post('/add-post', function (req, res) {
    var params = req.body;
    var newPlan ={};
    var planArr=params.plancontent.split(",");
    newPlan.userid="5845238d82bc6e2434e22d99";
    newPlan.planlist=[];
    var i=1;
    while (i<=planArr.length){
        var obj={
            status:1,
            content:planArr[i],
            day:i
        };
        newPlan.planlist.push(obj);
        i++;
    }
    plan.addPlan(newPlan,function (error,returnData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res, returnData);
        }
    });
});

//查询计划api
router.post('/query-post', function (req, res) {
    var params = req.body;
    plan.queryPlan(params,{},function (error,returenData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returenData);
        }
    });
});

//编辑计划api
router.post('/edit-post',function(req,res){
    var params=req.body;
    plan.editPlan(params,{},function(err,data){
        if(error){
            return returnFAIL(res,err.message);
        }else{
            return returnSUCCESS(res,data);
        }
    })
});


module.exports = router;
