/**
 * Created by pangmengchen on 12/4/16.
 */
(function () {
    $("#adduserbtn").click(clickAddUserBtn);
    $("#queryuserbtn").click(clickQueryUserBtn);

    //搜索用户
    function  clickQueryUserBtn(){
        $.ajax({
            type:"POST",
            url:'/user/query',
            data:{},
            dataType:"json",
            success:function(res){
                $("#show").text(res.data);
            }
        })
    };

    //点击添加用户
    function  clickAddUserBtn(){
        var name=$("#name").val();
        var age=$("#age").val();
        $.ajax({
            type:"post",
            url:"/user/adduser",
            data:{
                name:name,
                age:age
            },
            dataType:"json",
            success:function(res){
                console.log(res);
            }
        });
    };

    $(document).ready(function () {
        $.ajax({
            type:"post",
            url:'/home/query',
            data:{
                name:'Fizz',
                age:24
            },
            dataType:"json",
            success:function (res) {
                console.log(res);
            }
        })
    });

})();