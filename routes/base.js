/**
 * Created by Fizz on 2016/12/5.
 */

module.exports=function(app){

    //首页
    app.use('/',require(CONTROLLERS+'/index'));
   
};