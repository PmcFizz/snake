/**
 * Created by fizz on 16-12-10.
 */
var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    mongooseValidateFilter = require('mongoose-validatefilter'),
    validate = new mongooseValidateFilter.validate(),
    filter = new mongooseValidateFilter.filter();

var interestSchema = new schema({
    name: String,                                             // name
    doReason:String,                                          //need do reason
    donotReason:String,                                        //do not reason
    timelevel:{type:Number,default:1},                        //time import leave  1:not time import
    importlevel:{type:Number,default :1},                      //import level  1:not import
    createUserId: {type: schema.Types.ObjectId, ref: 'user'}, // create User Id
    createDate: {type: Date, default: Date.now()},            // create time
    status: {type: Number, default: 1},                       // status
    lastModifyDate: {type: Date, default: Date.now()}         // the last  modify date
});

//add name rule
validate.add('name', {
    required: true,
    msg: 'name is must defind'
});

filter.add('name', 'trim');

mongooseValidateFilter.validateFilter(interestSchema, validate, filter);
mongoose.model('interest', interestSchema);