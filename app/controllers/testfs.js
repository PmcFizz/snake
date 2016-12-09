/**
 * Created by Administrator on 2016/12/9.
 */
var fs=require('fs');
fs.unlink('tmp/hello',function (err) {
    if(err){throw  err};
    console.log("successfully deleted /tmp/delete");
});
