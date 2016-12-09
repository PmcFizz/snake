/**
 * Created by fizz on 16-12-9.
 * 歌单
 */

var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    mongooseValidateFilter = require("mongoose-validatefilter"),
    validate = new mongooseValidateFilter.validate(),
    filter = new mongooseValidateFilter.filter();

var palylistSchema = new schema({
    songnum: Number,// songs number
    createUserId: {type: schema.types.ObjectId, ref: 'user'}, //create users id
    createDate: {type: Date, default: Date.now()},  //create Date
    songIds:[{type:schema.types.ObjectId,ref:'song'}]  //songs id  list
});

//创建用户id不可为空
validate.add('createUserId', {
    required: true,
    msg: '创建用户id不可为空'
});

mongooseValidateFilter.validateFilter(palylistSchema, validate, filter);
mongoose.model('palylist', palylistSchema);
