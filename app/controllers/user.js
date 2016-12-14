/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var user = require(PROXY).user;
var async = require('async');

/**
 * 添加用户页
 */
router.get('/toadd', function (req, res) {
    console.log("req.session"+req.session.userid);
    if(req.session.userid){
        res.render('user/add');
    }else{
        res.render('user/login');
    }

});

/**
 * 登录页
 */
router.get('/tologin',function (req,res) {
    res.render('user/login');
});

/**
 * 用户列表页
 */
router.get('/users', function (req, res) {
    res.render('user/users');
});

/**
 *用户登录
 */
router.post('/login',function (req,res) {
    var params=req.body;
    var query={"_id":"5845238d82bc6e2434e22d99"};
    req.session.userid=query._id;
    user.getUserDatasByQuery(query,{},function (error,returnData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,req.session);
        }
    })
});

/**
 * 添加一个新用户
 */
router.post('/adduser', function (req, res) {
    var params = req.body;
    console.log("req.session"+req.session);
    user.addUser(params, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *批量添加用户
 */
router.post('/adduserlist', function (req, res) {
    var params = req.body;
    console.log("req.session"+req.session);
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        user.addUser({'name': nameArr[i]}, function (error, returnData) {
            if (error) {
                console.error(error.message);
            } else {
                console.log("添加成功!!");
            }
        });
        i++;
    }
    return returnSUCCESS(res, "");
});

/**
 * 查询用户
 */
router.post('/query', function (req, res) {
    var params = req.body;
    user.getUserDatasByQuery(params, {}, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});


/**
 * 使用dataTable插件查询用户
 */
router.post('/queryByDataTable', function (req, res) {
    var params = req.body;
    var query = {};
    var opt = {};
    var resData = {};
    if (params.name) {
        query.name = params.name;
    }
    opt.limit = params.length;
    opt.skip = params.start;

    async.parallel([
        function (cb) {
            user.countUserData(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            user.queryUserByPage(query, opt, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            })
        }

    ], function (err, result) {
        console.log(err);
        var dataTableModel={
            recordsFiltered:result[0],
            recordsTotal:result[0],
            data:result[1]
        };
        return res.json(dataTableModel);
    });


    /**
     * 查询总数
     */
    // user.countUserData(query, function (error, returnData) {
    //     if (error) {
    //         return returnFAIL(res, error.message);
    //     } else {
    //         resData.total = returnData;
    //     }
    // });

    /**
     * 分页查询
     */
    // user.queryUserByPage(query, opt, function (error, returnData) {
    //     if (error) {
    //         return returnFAIL(res, error.message);
    //     } else {
    //         return returnSUCCESS(res, returnData);
    //     }
    // })

});

module.exports = router;