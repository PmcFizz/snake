/**
 * Created by Fizz on 2016/12/5.
 */
var interest = require(MODELS).interest;

/**
 * @desc  add new interest
 * @param newInterest : wait added interest
 * @param cb : after add exec callback
 */
exports.addOneInterest = function (newInterest, cb) {
    interest.createOne(newInterest, cb);
};

/**
 * @desc  search interest by query and opt
 * @param query : interest.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.queryInterests = function (query, opt, cb) {
    interest
        .find(query, opt)
        .exec(cb);
};

/**
 * @desc  search interest by page
 * @param query : interest.field
 * @param opt : opt.skip number;opt.limit number;
 * @param cb : after search exec callback
 */
exports.queryInterestByPage = function (query, opt, cb) {
    interest
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : interest.field
 * @param cb : after search exec callback
 */
exports.countInterest = function (query, cb) {
    interest
        .count(query)
        .exec(cb)
};

/**
 * @desc  delet one interest  by query get
 * @param query : interest.field
 * @param cb : after deletone exec callback
 */
exports.delOneInterest = function (query, cb) {
    interest.removeOne(query, cb);
};

/**
 * @desc  update one interest by query
 * @param query : interest.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOneInterest = function (query, updateData, cb) {
    interest.updateOne(query, updateData, cb);
};