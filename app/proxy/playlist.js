/**
 * Created by fizz on 16-12-10.
 */

var playlist=require(MODELS).playlist;

/**
 * 新增一个歌单
 * @param newplaylist
 * @param callback
 */
exports.addPlaylist=function(newplaylist,callback){
    playlist.createOne(newplaylist,callback);
};


/**
 *根据query opt 查询符合条件的歌单
 */
exports.getPlaylistDatasByQuery=function(query,opt,callback){
    playlist
        .find(query,opt)
        .exec(callback);
};

/**
 * 分页查询
 */
exports.queryPlaylistByPage=function (query,opt,cb) {
    playlist
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .sort({createDate:-1})
        .exec(cb)
}

/**
 * 查询总数
 */
exports.countPlaylistData=function (query,cb) {
    playlist
        .count(query)
        .exec(cb)
}

