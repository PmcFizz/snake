/**
 * Created by Administrator on 2016/12/14.
 */
;(function () {
    $("#loginbtn").click(clickLoginBtn);
    function clickLoginBtn() {
        var name=$("#username").val();
        var pwd=$("pwd").val();
        $.ajax({
            type:'POST',
            url:'/user/login',
            data:{
                name:name,
                pwd:pwd
            },
            dataType:"json",
            success:function (res) {
                 if(res.code==200){
                     alert("登录成功!");
                 }else{
                     alert(res.msg);
                 }
            }
        })
    }
})();