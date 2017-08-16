/**
 * Created by FizzPang on 2017/8/10.
 */

let router = require('express').Router();
let song = require(PROXY).song;
let async = require('async');
let reqBody;

/**
 * handl return function
 * @param err errmsg
 * @param returnData return data
 */
const resFunc = (err, returnData, res) => {
    if (err) {
        return returnFAIL(res, err.message);
    } else {
        return returnSUCCESS(res, returnData);
    }
};

/**
 * to add song page
 */
router.get('/add', (req, res) => {
    res.render('song/add');
});

/**
 * to song list page
 */
router.get('/songs', (req, res) => {
    res.render('song/songs');
});

/**
 * to song list page
 */
router.get('/edit', (req, res) => {
    res.render('song/edit');
});

/**
 * add one song api
 */
router.post('/add-post', (req, res) => {
    reqBody = req.body;
    song.addOneSong(reqBody, (error, returnData) => {
        resFunc(error, returnData, res);
    });
});

/**
 * use dateTable query song data
 */
router.post('/queryByDataTable', (req, res) => {
    reqBody = req.body;
    let query = {};
    let opt = {};
    if (reqBody.name) {
        query.name = reqBody.name;
    }
    opt.limit = reqBody.length;
    opt.skip = reqBody.start;

    async.parallel([
        (cb) => {
            song.countSong(query, (error, returnData) => {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            });
        },
        (cb) => {
            song.querySongByPage(query, opt, (error, returnData) => {
                if (error) {
                    cb(error);
                } else {
                    cb(null, returnData);
                }
            })
        }

    ], (err, result) => {
        let dataTableModel = {
            recordsFiltered: result[0],
            recordsTotal: result[0],
            data: result[1]
        };
        return res.json(dataTableModel);
    });
});

/**
 * del one data
 */
router.post('/del-post', (req, res) => {
    reqBody = req.body;
    let id = reqBody._id ? reqBody._id : reqBody.id;
    song.delOneSong({_id: id}, (error, resData) => {
        resFunc(error, resData, res);
    })
});

/**
 * query only one  song data
 */
router.post('/queryById', (req, res) => {
    reqBody = req.body;
    let id = reqBody._id ? reqBody._id : reqBody.id;
    song.findOneSong(id, (error, returnData) => {
        resFunc(error, returnData, res);
    });
});

/**
 * query song data
 */
router.post('/query', (req, res) => {
    reqBody = req.body;
    let option = {};
    song.querySongs(reqBody, option, (error, returnData) => {
        resFunc(error, returnData, res);
    });
});

/**
 * update one song data
 */
router.post('/update-post', (req, res) => {
    reqBody = req.body;
    let id = reqBody._id ? reqBody._id : reqBody.id;
    delete  reqBody._id;
    delete  reqBody.id;
    song.updateOneSong({_id: id}, {$set: reqBody}, (error, returnData) => {
        resFunc(error, returnData, res);
    });
});

module.exports = router;