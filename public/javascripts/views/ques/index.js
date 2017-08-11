/**
 * Created by FizzPang on 2017/8/11.
 */

let container=new Vue({
    el:"#container",
    data:{
        ques:[]
    }
});

$.post('/ques/getData',{},function (res) {
    if(res.code==200){
        container.ques=res.data;
    }
},'json');