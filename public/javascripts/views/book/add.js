/**
 * Created by FizzPang on 2017/8/8.
 */
//添加书籍页面
(function () {
    console.log(11)
    var bookData=new Vue({
        el:"#bookform",
        data:{
            name:"红楼梦",
            status:0
        }
    });

    $("#addbtn").click(addBook);

    function addBook(){
        $.ajax({
            type:"post",
            url:'/book/add-post',
            data:{
                name:bookData.name,
                status:bookData.status
            },
            dataType:"json",
            success:function(res){
                if(res.code==200){
                    //alert("添加成功")
                }else{
                    alert(res.errmsg);
                }
            }
        })
    }


})();