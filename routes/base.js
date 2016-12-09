/**
 * Created by Fizz on 2016/12/5.
 */

module.exports=function(app){

    //用户
    app.use('/user',require(CONTROLLERS+'/user'));
    //首页
    app.use('/',require(CONTROLLERS+'/index'));
    //计划
    app.use('/plan',require(CONTROLLERS+'/plan'));

};