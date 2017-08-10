/**
 * Created by Administrator on 2017年8月4日10:19:21
 */
;(function () {
    $("#addbtn").click(clickAddBtn);
    function clickAddBtn() {
        var name=$("#name").val();
        var doreason=$("#doreason").val();
        var donotreason=$("#donotreason").val();
        var timelevel=$("#timelevel").val();
        var importlevel=$("#importlevel").val();

        $.ajax({
            type:"post",
            url:'/interest/add-post',
            data:{
                name:name,
                doreason:doreason,
                donotreason:donotreason,
                timelevel:timelevel,
                importlevel:importlevel
            },
            dataType:"json",
            success:function (res) {
                console.log("添加成功!!!");
            }
        })

    }


})();