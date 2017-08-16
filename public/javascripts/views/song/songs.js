/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    $(document).ready(function () {
        var table = $("#books").dataTable({
            paging: true,
            serverSide: true,
            bProcessing: true,
            bSort: false,
            bSearching:false,
            bStateSave: false,
            bSearchable:false,
            bFilter:false,
            bLengthChange: false,
            ajax: {
                url: '/song/queryByDataTable',
                type: 'POST',
                data: function (d) {
                }
            },
            columns: [{"data": '_id'}, {"data": 'name'},
                {"data": 'status',
                 "fnCreatedCell":function(nTd,sData,oData){
                    var str="未开始";
                    if(oData.status==1){
                        str="阅读中";
                    }else if(oData.status==2){
                        str="已结束"
                    }
                    $(nTd).html(str);
                 }},
                {data:'_id',
                'fnCreatedCell':function (nTd,sData,oData) {
                    var str='<button class="btn btn-warning btn-sm J_delOne" data-id="'+sData+'">删除</button>';
                        str=str+'<a class="btn btn-sm btn-info" href="/song/edit?id='+sData+'">修改</a>';
                    $(nTd).html(str);
                }}
                ]
        })
    });
    
    $(document).on("click",".J_delOne",function (even) {
        var id=even.target.dataset.id;
        $.post('/song/del-post',{_id:id},function (res) {
            if(res.code===200){
                $("#books").DataTable().page('first').draw(false);
            }else{
                alert(res.errmsg);
            }
        },'json');
    })

})();