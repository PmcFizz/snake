/**
 * Created by fizz on 16-12-10.
 */
var router=require('express').Router();
var song=require(PROXY).song;

/**
 * 前往添加歌曲
 */
router.get('/add',function (req,res) {
   res.render('song/add');
});

/**
 * 前往歌曲列表
 */
router.get('/songs',function (req,res) {
    res.render('song/songs');
});

router.post('/createOne',function (req,res) {
    var params=req.body;
    song.addSong(params,function (err,returnData) {
        if(err){return returnFAIL(res,err.message)}
        return returnSUCCESS(res,returnData);
    })
});

router.post('/query',function (req,res) {
    var params=req.body;
    song.getSongDatasByQuery(params,function (error,returnData) {
        if(error){
            return returnFAIL(res,error.message);
        }else{
            return returnSUCCESS(res,returnData);
        }
    })
});

