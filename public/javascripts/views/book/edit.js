/**
 * Created by FizzPang on 2017/8/10.
 */
//修改书籍页面
(function () {

    var id=tool.getHref("id");
    var bookData=new Vue({
        el:"#bookform",
        data:{
            name:"",
            status:0
        }
    });
    if(id){
        getInfo();
    }else{
        alert("路径错误!");
        return;
    }

    function  getInfo() {
        $.post("/book/query",{_id:id},function(res){
            if(res.code==200){
                var infoData=res.data[0];
                bookData.name=infoData.name;
                bookData.status=infoData.status;
            }else{
                alert(res.errmsg);
            }
        },'json');
    }

    $("#savebtn").click(saveOneData);

    function saveOneData(){
        $.ajax({
            type:"post",
            url:'/book/update-post',
            data:{
                _id:id,
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