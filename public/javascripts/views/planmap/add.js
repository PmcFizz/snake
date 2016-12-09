/**
 * Created by Administrator on 2016/12/7.
 *添加计划
 */
;(function () {

    $("#submitbtn").click(clickSubmitbtn);

    //点击提交
    function clickSubmitbtn() {
        var username=$("#username").val();
        var plancontent=$("#plancontent").val();
        $.ajax({
            type:"POST",
            url:'/plan/create',
            data:{
                username:username,
                plancontent:plancontent
            },
            success:function (res) {
                if(res.code==200){
                   // alert("提交成功!");
                }else{
                    alert(res.msg);
                }
            }
        })
    };

    $(document).ready(function () {

    });
})();

