/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var user = require(PROXY).user;
var async = require('async');

/**
 * 添加用户页
 */
router.get('/add', function (req, res) {
     if(req.cookies.userid){
         res.render('user/add');
     }else{
         res.render('user/login');
     }
});

/**
 * 编辑用户
 */
router.get('/edit',function (req,res) {
    res.render('user/edit');
});

/**
 * 编辑用户页
 */
router.get('/users', function (req, res) {
    res.render('user/users');
});


/**
 *用户登录页
 */
router.post('/login',function (req,res) {
    res.render('user/login');
});


/**
 *用户登录
 */
router.post('/login-post',function (req,res) {
    res.cookie('userid', '5981838b20c3c70984544551', { expires: new Date(Date.now() + 900000), httpOnly: true });
    return returnSUCCESS(res,"12");
});

/**
 * 添加一个新用户
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    user.addUser(params, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * 修改一个用户
 */
router.post('/edit-post',function (req,res) {
   var params=req.body;
   var id=params.id;
   delete  params.id;
   user.updateUser({_id:id},{$set:params},function (err,returnData) {
       if (err) {
           return returnFAIL(res, err.message);
       } else {
           return returnSUCCESS(res, returnData);
       }
   })
});

/**
 *批量添加用户
 */
router.post('/addlist-post', function (req, res) {
    var params = req.body;
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
router.post('/query-post', function (req, res) {
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
    opt.limit =  parseInt(params.length,10);
    opt.skip = parseInt(params.start,10);

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
});

module.exports = router;