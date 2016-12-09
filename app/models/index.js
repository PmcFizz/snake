/**
 * Created by Fizz on 2016/12/5.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/local',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("数据库已连接...")
    }
});

require('./user');
require('./plan');
exports.user=mongoose.model('user');
exports.plan=mongoose.model('plan');
