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
                url: '/book/queryByDataTable',
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
                 }}
                ]
        })

    });

})();