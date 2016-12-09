/**
 * Created by Administrator on 2016/12/7.
 */
var router = require('express').Router();
var plan=require(PROXY).plan;

//添加计划页面
router.get('/addpage', function (req, res) {
    res.render('planmap/add');
});

//计划列表页面
router.get('/plans', function (req, res) {
    res.render('planmap/plan')
});

//添加计划api
router.post('/create', function (req, res) {
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
router.post('/queryplans', function (req, res) {
    var params = req.body;
    plan.queryPlan(params,{},function (error,returenData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returenData);
        }
    });
});

module.exports = router;
