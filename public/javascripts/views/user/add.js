/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    $("#adduserbtn").click(clickAddUserBtn);
    function clickAddUserBtn() {
        var name=$("#name").val();
        $.ajax({
            type:"post",
            url:'/user/adduserlist',
            data:{
                nameList:name
            },
            dataType:"json",
            success:function (res) {
                console.log("添加成功!!!");
            }
        })

    }


})();