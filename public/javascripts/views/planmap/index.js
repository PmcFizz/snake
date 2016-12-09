/**
*使用dataTable制作作战地图
*/
(function(){
	$(document).ready(function(){
        var table =  $('#example').DataTable({
	       select: {
	            style: 'os',
	            items: 'cell'
	        },
	        bSort:false,

			scrollY:        "300px",
			scrollX:        "300px",
			scrollCollapse: true,
			paging:         false,
			fixedColumns:   {
				leftColumns: 1
			},

	        bLengthChange:false,
	        searching:false,
	        dom:'Bfrtip',
	        buttons:[{
	        	text:'Get selected data',
	        	action:function(){
	        		var seleCell=table.cells({selected:true});
	        		var count=seleCell.count();
	        		var seleCellData=seleCell.data()[0];
	        		console.log(seleCellData);
	        	}
	        }]
        });

        table.on( 'select', function ( e, dt, type, indexes ) {
            var cellData = table.cells({selected:true}).data()[0];
           $("#selectContent").val(cellData);
        });

	});


})();