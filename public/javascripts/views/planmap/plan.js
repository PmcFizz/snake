/**
 * Created by Administrator on 2016/12/7.
 */
;(function () {

    //获取计划数据
    function getPlanData() {
        $.ajax({
            type: "POST",
            url: '/plan/queryplans',
            data:{
                _id:'5847a3c1da759837ac58aa67',
            },
            dataType: "json",
            success: function (res) {
                if (res.code == 200) {
                    var i = 0;
                    var planArr = [];
                    while (i < res.data.length) {
                        var item = res.data[i];
                        planArr.push('<li>用户id' + item.userid + '最后修改事件' + item.lastModifyDate + '</li>');
                        i++;
                    }
                    $("#planol").html(planArr.join(''));
                } else {
                    alert(res.msg);
                }
            }
        })
    };

    $(document).ready(function () {
        getPlanData();
    });

})();