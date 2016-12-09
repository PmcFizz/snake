/**
 * Created by Fizz on 2016/12/5.
 */
var router=require('express').Router();
var user=require(PROXY).user;

/**
 * 添加用户页
 */
router.get('/toadd',function (req,res) {
    res.render('user/add');
});

/**
 * 用户列表页
 */
router.get('/toquery',function (req,res) {
    res.render('user/users');
});

/**
 * 添加一个新用户
 */
router.post('/adduser',function(req,res){
    var params=req.body;
    user.addUser(params,function(error,returnData){
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returnData);
        }
    });
});

/**
 *批量添加用户
 */
router.post('/adduserlist',function (req,res) {
    var params=req.body;
    var nameArr=params.nameList.split(',');
    var i=0;
    while(i<nameArr.length){
        user.addUser({'name':nameArr[i]},function (error,returnData) {
            if(error){
                console.error(error.message);
            }else{
                console.log("添加成功!!");
            }
        });
        i++;
    }
    return returnSUCCESS(res,"");
});

/**
 * 查询用户
 */
router.post('/query',function(req,res){
    var params=req.body;
    user.getUserDatasByQuery(params,{},function(error,returnData){
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returnData);
        }
    });
});


/**
 * 使用dataTable插件查询用户
 */
router.post('/queryByDataTable',function (req,res) {
    var params=req.body;
    var query={};
    var opt={};
    var resData={};
    if(params.name){
        query.name=params.name;
    }
    opt.limit=params.length;
    opt.skip=params.start;



    /**
     * 查询总数
     */
    user.countUserData(query,function (error,returnData) {
        if(error){
            return returnFAIL(res,error.message);
        }else {
            resData.total=returnData;
        }

    });

    /**
     * 分页查询
     */
    user.queryUserByPage(query,opt,function (error,returnData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returnData);
        }
    })
});

module.exports = router;