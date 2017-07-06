/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var waitreplace = require(PROXY).waitreplace;
var async = require('async');

/**
 * to add waitreplace page
 */
router.get('/add', function (req, res) {
    res.render('waitreplace/add');
});

/**
 * to waitreplace list page
 */
router.get('/waitreplaces', function (req, res) {
    res.render('waitreplace/waitreplaces');
});

/**
 * to waitreplace list page
 */
router.get('/edit', function (req, res) {
    res.render('waitreplace/edit');
});

/**
 * add one waitreplace api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    waitreplace.addOneWaitreplace(params, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many waitreplace api
 */
router.post('/addwaitreplacelist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        waitreplace.addOneWaitreplace({'name': nameArr[i]}, function (error) {
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
 * query waitreplace data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    waitreplace.queryWaitreplaces(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query waitreplace data
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
            waitreplace.countWaitreplace(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            waitreplace.queryPlaylistByPage(query, opt, function (error, returnData) {
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

module.exports = router;