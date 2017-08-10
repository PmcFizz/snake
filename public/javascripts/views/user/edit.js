/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    var id=tool.getHref("id");
    if(!id){
        alert("路径错误");
        return;
    }

    getUserInfo();

    //获取一个用户信息
    function  getUserInfo() {
      $.post("/user/query-post",{_id:id},function (res) {
          var data=res.data[0];
          $("#name").val(data.name);
          $("#age").val(data.age);
          $("#gender").val(data.gender);
      },'json');
    };

    $("#edituserbtn").click(clickEditUserBtn);
    function clickEditUserBtn() {
        var name=$("#name").val();
        var age=$("#age").val();
        var gender=$("#gender").val();
        $.ajax({
            type:"post",
            url:'/user/edit-post',
            data:{
                id:id,
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