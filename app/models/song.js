/**
 * Created by Fizz on 2016/12/5.
 */
var song = require(MODELS).song;

/**
 * @desc  add new song
 * @param newSong : wait added song
 * @param cb : after add exec callback
 */
exports.addOneSong = function (newSong, cb) {
    song.createOne(newSong, cb);
};

/**
 * @desc  search song by query and opt
 * @param query : song.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.querySongs = function (query, opt, cb) {
    song
        .find(query, opt)
        .exec(cb);
};

/**
 * @desc  search song by page
 * @param query : song.field
 * @param opt : opt.skip number;opt.limit number;
 * @param cb : after search exec callback
 */
exports.querySongByPage = function (query, opt, cb) {
    song
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : song.field
 * @param cb : after search exec callback
 */
exports.countSong = function (query, cb) {
    song
        .count(query)
        .exec(cb)
};

/**
 * @desc  delet one song  by query get
 * @param query : song.field
 * @param cb : after deletone exec callback
 */
exports.delOneSong = function (query, cb) {
    song.removeOne(query, cb);
};

/**
 * @desc  update one song by query
 * @param query : song.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOneSong = function (query, updateData, cb) {
    song.updateOne(query, updateData, cb);
};