/**
 * Created by Fizz on 2016/12/6.
 * 用户计划表
 */
var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    mongooseValidateFilter = require('mongoose-validatefilter'),
    validate = new mongooseValidateFilter.validate(),
    filter =new mongooseValidateFilter.filter();

var planSchema = new schema({
    userid: {type: schema.Types.ObjectId, ref: 'user'},  //用户id
    planlist: [{status: Number, content: String, day: Number}], //计划集合
    mouth: {type: String},  //月份
    status: {type: Number}, //状态
    lastModifyDate: {type: Date, default: Date.now()} //最后修改时间
});

//用户id不可为空
validate.add('userid', {
    required: true,
    msg: '用户id不可为空'
});

filter.add('mouth', 'trim');
mongooseValidateFilter.validateFilter(planSchema, validate, filter);
mongoose.model('plan', planSchema);
