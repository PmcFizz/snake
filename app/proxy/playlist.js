/**
 * Created by Fizz on 2016/12/5.
 */
var playlist = require(MODELS).playlist;

/**
 * @desc  add new playlist
 * @param newPlaylist : wait added playlist
 * @param cb : after add exec callback
 */
exports.addOnePlaylist = function (newPlaylist, cb) {
    playlist.createOne(newPlaylist, cb);
};

/**
 * @desc  search playlist by query and opt
 * @param query : playlist.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.queryPlaylists = function (query, opt, cb) {
    playlist
        .find(query, opt)
        .exec(cb);
};

/**
 * @desc  search playlist by page
 * @param query : playlist.field
 * @param opt : opt.skip number;opt.limit number;
 * @param cb : after search exec callback
 */
exports.queryPlaylistByPage = function (query, opt, cb) {
    playlist
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : playlist.field
 * @param cb : after search exec callback
 */
exports.countPlaylist = function (query, cb) {
    playlist
        .count(query)
        .exec(cb)
};

/**
 * @desc  delet one playlist  by query get
 * @param query : playlist.field
 * @param cb : after deletone exec callback
 */
exports.delOnePlaylist = function (query, cb) {
    playlist.removeOne(query, cb);
};

/**
 * @desc  update one playlist by query
 * @param query : playlist.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOnePlaylist = function (query, updateData, cb) {
    playlist.updateOne(query, updateData, cb);
};