/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var song = require(PROXY).song;
var async = require('async');

/**
 * to add song page
 */
router.get('/add', function (req, res) {
    res.render('song/add');
});

/**
 * to song list page
 */
router.get('/songs', function (req, res) {
    res.render('song/songs');
});

/**
 * to song list page
 */
router.get('/edit', function (req, res) {
    res.render('song/edit');
});

/**
 * add one song api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    var newSong={
        name:params.name,
        doReason:params.doreason,
        donotReason:params.donotreason,
        timelevel:parseInt(params.timelevel,10),
        importlevel:parseInt(params.importlevel,10)
    }
    song.addOneSong(newSong, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many song api
 */
router.post('/addsonglist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        song.addOneSong({'name': nameArr[i]}, function (error) {
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
 * query song data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    song.querySongs(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query song data
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
            song.countSong(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            song.queryPlaylistByPage(query, opt, function (error, returnData) {
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