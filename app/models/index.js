/**
 * Created by Fizz on 2016/12/5.
 */
var mongoose = require('mongoose');
var dbconfig = require('../config/dbconfig.json');
mongoose.connect(dbconfig.dburl, function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("数据库已连接...")
    }
});

require('./user');
require('./plan');
// require('./song');
require('./playlist');
require('./interest');
require('./task');
require('./book');
exports.user = mongoose.model('user');
exports.plan = mongoose.model('plan');
// exports.song = mongoose.model('song');
exports.playlist = mongoose.model('playlist');
exports.interest = mongoose.model('interest');
exports.task=mongoose.model('task');
exports.book=mongoose.model('book');