/**
 * Created by Fizz on 2016/12/5.
 * 用户表
 */
var mongoose=require('mongoose'),
    schema=mongoose.Schema,
    mongooseValidateFilter=require('mongoose-validatefilter'),
    validate=new mongooseValidateFilter.validate(),
    filter=new mongooseValidateFilter.filter();

var userSchema=new schema({
    name:String,//用户名
    age:Number,//用户年龄
    gender:Number,//用户性别 1:男;2:女;3:无;
    createDate:{type:Date,default:Date.now()}, //创建时间
    lastLoginData:{type:Date,default:Date.now()} //上次登录时间
});

//添加用户名限制
validate.add('name',{
    required:true,
    msg:'用户名不可为空'
});

filter.add('name','trim');

mongooseValidateFilter.validateFilter(userSchema,validate,filter);
mongoose.model('user',userSchema);