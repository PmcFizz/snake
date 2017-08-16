/**
 * Created by FizzPang on 2017/8/8.
 */
//添加页面
(function () {
    var formData=new Vue({
        el:"#dataform",
        data:{
            name:"浮夸",
            link:"",
        }
    });

    $("#addbtn").click(addOne);

    function addOne(){
        $.ajax({
            type:"post",
            url:'/song/add-post',
            data:{
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