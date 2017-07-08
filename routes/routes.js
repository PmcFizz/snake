/**
 * Created by Fizz on 2016/12/5.
 */
module.exports=function(app){
    /**
     * baseAPI公共路径
     */
    require('./base')(app);

    /**
     *个人私人路由
     */
    require('./private')(app);

};
