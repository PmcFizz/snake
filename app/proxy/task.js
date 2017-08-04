/**
 * Created by Fizz on 2016/12/5.
 */
var task = require(MODELS).task;

/**
 * @desc  add new task
 * @param newTask : wait added task
 * @param cb : after add exec callback
 */
exports.addOneTask = function (newTask, cb) {
    task.createOne(newTask, cb);
};

/**
 * @desc  search task by query and opt
 * @param query : task.field
 * @param opt : opt.skip number;opt.limit number
 * @param cb : after search exec callback
 */
exports.queryTasks = function (query, opt, cb) {
    task
        .find(query, opt)
        .exec(cb);
};

/**
 * @desc  search task by page
 * @param query : task.field
 * @param opt : opt.skip number;opt.limit number;
 * @param cb : after search exec callback
 */
exports.queryTaskByPage = function (query, opt, cb) {
    task
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .exec(cb)
};

/**
 * @desc  search count
 * @param query : task.field
 * @param cb : after search exec callback
 */
exports.countTask = function (query, cb) {
    task
        .count(query)
        .exec(cb)
};

/**
 * @desc  delet one task  by query get
 * @param query : task.field
 * @param cb : after deletone exec callback
 */
exports.delOneTask = function (query, cb) {
    task.removeOne(query, cb);
};

/**
 * @desc  update one task by query
 * @param query : task.field
 * @param updateData :wait update data
 * @param cb : after updateone exec callback
 */
exports.updateOneTask = function (query, updateData, cb) {
    task.updateOne(query, updateData, cb);
};