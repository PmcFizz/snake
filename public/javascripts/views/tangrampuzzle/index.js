/**
 * Created by Administrator on 2017/1/6.
 * 七巧板
 */
;(function () {
    $(".drop").attr("draggable",true);

    $(document).on("mousedown","#one",mouseDownPuzzle);

    $(document).on("mousumove","#one",mouseMovePuzzle);

    $(document).on("dragover",".container",dragOverContain);

    $(document).on("drop",".container",dragDrop);

    function mouseDownPuzzle(even) {
        console.log("down"+$(even))
    }

    function mouseMovePuzzle(even){
        console.log("move"+even)
    }

    function dragOverContain(even) {
        console.log(even.clientX);
        even.preventDefault();
    }

    function dragDrop(even) {
        console.log("dragDrop"+even)
    }


})();