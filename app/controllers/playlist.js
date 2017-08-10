/**
 * Created by Fizz on 2016/12/5.
 */
var router = require('express').Router();
var playlist = require(PROXY).playlist;
var async = require('async');

/**
 * to add playlist page
 */
router.get('/add', function (req, res) {
    res.render('playlist/add');
});

/**
 * to playlist list page
 */
router.get('/playlists', function (req, res) {
    res.render('playlist/playlists');
});

/**
 * to playlist list page
 */
router.get('/edit', function (req, res) {
    res.render('playlist/edit');
});

/**
 * add one playlist api
 */
router.post('/add-post', function (req, res) {
    var params = req.body;
    var newPlaylist={
        name:params.name,
        doReason:params.doreason,
        donotReason:params.donotreason,
        timelevel:parseInt(params.timelevel,10),
        importlevel:parseInt(params.importlevel,10)
    }
    playlist.addOnePlaylist(newPlaylist, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 *add many playlist api
 */
router.post('/addplaylistlist', function (req, res) {
    var params = req.body;
    var nameArr = params.nameList.split(',');
    var i = 0;
    while (i < nameArr.length) {
        playlist.addOnePlaylist({'name': nameArr[i]}, function (error) {
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
 * query playlist data
 */
router.post('/query', function (req, res) {
    var params = req.body;
    var option = {};
    playlist.queryPlaylists(params, option, function (error, returnData) {
        if (error) {
            return returnFAIL(res, error.message);
        } else {
            return returnSUCCESS(res, returnData);
        }
    });
});

/**
 * use dateTable query playlist data
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
            playlist.countPlaylist(query, function (error, returnData) {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        function (cb) {
            playlist.queryPlaylistByPage(query, opt, function (error, returnData) {
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