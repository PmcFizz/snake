/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var interest = require(PROXY).interest;
var async = require('async');

/**
 * to add interest page
 */
router.get('/add', function (req, res) {
    res.render('interest/add');
});

/**
 * to interest list page
 */
router.get('/interests', function (req, res) {
    res.render('interest/interests');
});

/**
 * to interest list page
 */
router.get('/edit', function (req, res) {
    res.render('interest/edit');
});

/**
 * add one interest api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    var newInterest={
        name:params.name,
        doReason:params.doreason,
        donotReason:params.donotreason,
        timelevel:parseInt(params.timelevel,10),
        importlevel:parseInt(params.importlevel,10)
    }
    interest.addOneInterest(newInterest, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many interest api
 */
router.post('/addinterestlist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        interest.addOneInterest({'name': nameArr[i]}, function (error) {
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
 * query interest data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    interest.queryInterests(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query interest data
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
            interest.countInterest(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            interest.queryPlaylistByPage(query, opt, function (error, returnData) {
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