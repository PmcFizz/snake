/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var task = require(PROXY).task;
var async = require('async');

/**
 * to add task page
 */
router.get('/add', function (req, res) {
    res.render('task/add');
});

/**
 * to task list page
 */
router.get('/tasks', function (req, res) {
    res.render('task/tasks');
});

/**
 * to task list page
 */
router.get('/edit', function (req, res) {
    res.render('task/edit');
});

/**
 * add one task api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    task.addOneTask(params, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many task api
 */
router.post('/addtasklist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        task.addOneTask({'name': nameArr[i]}, function (error) {
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
 * query task data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    task.queryTasks(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query task data
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
            task.countTask(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            task.queryPlaylistByPage(query, opt, function (error, returnData) {
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