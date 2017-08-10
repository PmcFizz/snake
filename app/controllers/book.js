/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var book = require(PROXY).book;
var async = require('async');

/**
 * to add book page
 */
router.get('/add', function (req, res) {
    res.render('book/add');
});

/**
 * to book list page
 */
router.get('/books', function (req, res) {
    res.render('book/books');
});

/**
 * to book list page
 */
router.get('/edit', function (req, res) {
    res.render('book/edit');
});

/**
 * add one book api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    book.addOneBook(params, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many book api
 */
router.post('/addbooklist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        book.addOneBook({'name': nameArr[i]}, function (error) {
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
 * query book data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    book.queryBooks(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query book data
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
            book.countBook(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            book.queryBookByPage(query, opt, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            })
        }

    ], function (err, result) {
        console.log(err);
        var dataTableModel = {
            recordsFiltered: result[0],
            recordsTotal: result[0],
            data: result[1]
        };
        return res.json(dataTableModel);
    });

});

/**
 * 删除一条记录
 */
router.post('/del-post',function (req,res) {
    var params=req.body;
    book.delOneBook({_id:params._id},function (err,resData) {
        if(err){
            return returnFAIL(res,err);
        }else{
            return returnSUCCESS(res,resData)
        }
    })
});

/**
 * 更新一条记录
 */
router.post('/update-post',function (req,res) {
    var params=req.body;
    var _id=params._id;
    delete params._id;
    book.updateOneBook({_id:_id},{$set :params},function (err,resData) {
        if(err){
            return returnFAIL(res,err.message);
        }else{
            return returnSUCCESS(res,resData)
        }

    });
})

module.exports = router;