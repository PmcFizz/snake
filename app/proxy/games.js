/**
 * Created by Fizz on 2016/12/5.
 */
var user=require(MODELS).user;

/**
 * 新增一个用户
 * @param newUser
 * @param callback
 */
exports.addUser=function(newUser,callback){
    user.createOne(newUser,callback);
};


/**
 *根据query opt 查询符合条件的用户
 */
exports.getUserDatasByQuery=function(query,opt,callback){
    user
        .find(query,opt)
        .exec(callback);
};

/**
 * 分页查询
 */
exports.queryUserByPage=function (query,opt,cb) {
    user
        .find(query)
        .skip(opt.skip)
        .limit(opt.limit)
        .sort({createDate:-1})
        .exec(cb)
}

/**
 * 查询总数
 */
exports.countUserData=function (query,cb) {
    user
        .count(query)
        .exec(cb)
}

