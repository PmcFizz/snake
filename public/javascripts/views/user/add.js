/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    $("#adduserbtn").click(clickAddUserBtn);
    function clickAddUserBtn() {
        var name=$("#name").val();
        var age=$("#age").val();
        var gender=$("#gender").val();
        $.ajax({
            type:"post",
            url:'/user/add-post',
            data:{
                name:name,
                age:age,
                gender:gender
            },
            dataType:"json",
            success:function (res) {
                console.log("添加成功!!!");
            }
        })

    }


})();