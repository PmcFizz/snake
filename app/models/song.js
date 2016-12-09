/**
 * Created by fizz on 16-12-9.
 * song
 */

var mongoose=require('mongoose'),
    schema=mongoose.Schema,
    mongooseValidateFilter=require('mongoose-validatefilter'),
    validate=new  mongooseValidateFilter.validate(),
    filter=new mongooseValidateFilter.filter();

var songSchema=new schema({
    createUserId:{type:schema.types.ObjectId,ref:'user'}, //create user id
    createDate:{type:Date,default:Date.now()},  //create Date
    tag:[{type:String}], //tag
    songer:String,//songer
    timelong :Number, //song time long
    playnum:Number, // paly number
});


//创建用户id不可为空
validate.add('createUserId', {
    required: true,
    msg: '创建用户id不可为空'
});

mongooseValidateFilter.validateFilter(songSchema, validate, filter);
mongoose.model('song', songSchema);


