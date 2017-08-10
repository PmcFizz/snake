/**
 * Created by Fizz on 2016/12/5.
 */
var book = require(MODELS).book;

/**
 * @desc  add new book
 * @param newBook : wait added book
 * @param cb : after add exec callback
 */
exports.addOneBook = function (newBook, cb) {
    book.createOne(newBook, cb);
};

/**
 * @desc  search book by query and opt
 * @param query : book.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.queryBooks = function (query, opt, cb) {
    book
        .find(query, opt)
        .exec(cb);
};

/**
 * @desc  search book by page
 * @param query : book.field
 * @param opt : opt.skip number;opt.limit number;
 * @param cb : after search exec callback
 */
exports.queryBookByPage = function (query, opt, cb) {
    book
        .find(query)
        .skip(parseInt(opt.skip,10))
        .limit(parseInt(opt.limit,10))
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : book.field
 * @param cb : after search exec callback
 */
exports.countBook = function (query, cb) {
    book
        .count(query)
        .exec(cb)
};

/**
 * @desc  delet one book  by query get
 * @param query : book.field
 * @param cb : after deletone exec callback
 */
exports.delOneBook = function (query, cb) {
    book.removeOne(query, cb);
};

/**
 * @desc  update one book by query
 * @param query : book.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOneBook = function (query, updateData, cb) {
    book.updateOne(query, updateData, cb);
};