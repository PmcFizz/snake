/**
 * Created by FizzPang on 2017/8/10.
 */
//修改书籍页面
(function () {

    var id=tool.getHref("id");
    var formData=new Vue({
        el:"#dataform",
        data:{
            name:"",
            link:""
        }
    });
    if(id){
        getInfo();
    }else{
        alert("路径错误!");
        return;
    }

    function  getInfo() {
        $.post("/song/query",{_id:id},function(res){
            if(res.code==200){
                var infoData=res.data[0];
                formData.name=infoData.name;
                formData.link=infoData.link;
            }else{
                alert(res.errmsg);
            }
        },'json');
    }

    $("#savebtn").click(saveOneData);

    function saveOneData(){
        $.ajax({
            type:"post",
            url:'/song/update-post',
            data:{
                _id:id,
                name:formData.name,
                link:formData.link
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