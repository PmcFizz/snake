/**
 * Created by Administrator on 2016/12/8.
 */
;(function () {
    $(document).ready(function () {
        var table = $("#example").dataTable({
            paging: true,
            serverSide: true,
            bProcessing: true,
            bSort: false,
            bStateSave: false,
            bLengthChange: false,
            ajax: {
                url: '/user/queryByDataTable',
                type: 'POST',
                data: function (d) {
                }
            },
            columns: [{"data": '_id'}, {"data": 'name'}, {"data": 'gender'}, {"data": 'lastLoginData'}, {"data": 'lastLoginData'}, {"data": 'name'},
                {"data":"_id",
                 "fnCreatedCell":function (nTd,sData,oData) {
                     $(nTd).html('<a href="/user/edit?id='+oData._id+'">修改</a>');
                 }}]
        })

    });

})();