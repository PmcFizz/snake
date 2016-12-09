/**
 * Created by Administrator on 2016/12/7.
 */

var plan=require(MODELS).plan;

/**
 * 添加一个计划
 * @param newplan
 * @param callback
 */
exports.addPlan=function (newplan,callback) {
    plan.createOne(newplan,callback);
};

/**
 * 查询计划
 * @param query
 * @param opt
 * @param cb
 */
exports.queryPlan=function (query,opt,cb) {
    plan
        .find(query,opt)
        .exec(cb);
}