/**
 * Created by fizz on 16-12-10.
 */
var song=require(MODELS).song;

/**
 * 新增一个歌曲
 * @param newSong
 * @param callback
 */
exports.addSong=function(newSong,callback){
    song.createOne(newSong,callback);
};


/**
 *根据query opt 查询符合条件的歌曲
 */
exports.getSongDatasByQuery=function(query,opt,callback){
    song
        .find(query,opt)
        .exec(callback);
};

/**
 * 分页查询
 */
exports.querySongByPage=function (query,opt,cb) {
    song
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .sort({createDate:-1})
        .exec(cb)
}

/**
 * 查询总数
 */
exports.countSongData=function (query,cb) {
    song
        .count(query)
        .exec(cb)
}

