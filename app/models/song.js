/**
 * Created by fizz on 16-12-10.
 */
var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    mongooseValidateFilter = require('mongoose-validatefilter'),
    validate = new mongooseValidateFilter.validate(),
    filter = new mongooseValidateFilter.filter();

var songSchema = new schema({
    name: String,                                             // name
    createUserId: {type: schema.Types.ObjectId, ref: 'user'}, // create User Id
    link:String,                                              //song link
    createDate: {type: Date, default: Date.now()},            // create time
    status: {type: Number, default: 1},                       // status
    lastModifyDate: {type: Date, default: Date.now()},         // the last  modify date
    tag: [{type: String}], //tag
    songer: String,//songer
    timelong: Number, //song time long
    playnum: Number, // paly number
});

//add name rule
validate.add('name', {
    required: true,
    msg: 'name is must defind'
});

filter.add('name', 'trim');

mongooseValidateFilter.validateFilter(songSchema, validate, filter);
mongoose.model('song', songSchema);