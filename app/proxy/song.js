/**
 * Created by FizzPang on 2017/8/10.
 */
const song = require(MODELS).song;

/**
 * @desc  add new song
 * @param newSong : wait added song
 * @param cb : after add exec callback
 */
exports.addOneSong = (newSong, cb) => {
    song.createOne(newSong, cb);
};

/**
 * @desc  add new song
 * @param newSongs : Array wait added
 * @param cb : after add exec callback
 */
exports.addManySongs = (newSongs, cb) => {
    song.create(newSongs, cb);
};

/**
 * @desc  search song by query and opt
 * @param query : song.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.querySongs = (query, opt, cb) => {
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
exports.querySongByPage = (query, opt, cb) => {
    opt.limit = opt.limit ? opt.limit : 10;
    song
        .find(query)
        .skip(parseInt(opt.skip, 10))
        .limit(parseInt(opt.limit, 10))
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : song.field
 * @param cb : after search exec callback
 */
exports.countSong = (query, cb) => {
    song
        .count(query)
        .exec(cb)
};

/**
 * @desc  find one song by query
 * @param query : _id
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.findOneSong = (id, cb) => {
    song.findById(id, cb);
};

/**
 * @desc  update one song by query
 * @param query : song.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOneSong = (query, updateData, cb) => {
    song.updateOne(query, updateData, cb);
};

/**
 *update many data
 * @param {Object} conditions
 * @param {Object} updateData
 * @param {Function} [cb]
 * @return {Query}
 * @api public
 */
exports.updateManySongs = (query, updateData, cb) => {
    song.updateMany(query, updateData, {multi: true}, cb);
};

/**
 * @desc  delet one song  by query get
 * @param query : song.field
 * @param cb : after deletone exec callback
 */
exports.delOneSong = (query, cb) => {
    song.removeOne(query, cb);
};

/**
 *update many data
 * @param {Object} conditions
 * @param {Object} updateData
 * @param {Function} [cb]
 * @return {Query}
 * @api public
 */
exports.delManySongs = (query, cb) => {
    song.deleteMany(query, cb);
};