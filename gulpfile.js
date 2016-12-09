/**
 * Created by Administrator on 2016/12/9.
 */
var gulp = require('gulp');
var fs = require('fs');
var dirTree = [];

gulp.task("default", function () {
    console.log("开始gulp吧...");
})

// fs.writeFile('app/controllers/tmp/pl.json',"1111111111",function (err) {
//     if(err){console.log(err.message)};
// });
// fs.readFile('app/controllers/tmp/pl.json','utf-8',function (err,data) {
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(data);
//     }
// })
// var pl=fs.readFileSync("app/controllers/tmp/pl.json",'utf-8');
// console.log(pl);

// fs.unlink("app/controllers/tmp",function (err) {
//     if(err){
//         console.log(err.message);
//     }
// })
// console.log("开始gulp...");
// getFileTree('app');
// console.log(dirTree);
// var writeObj = {};
// writeObj.data = dirTree;
// fs.writeFile('app/controllers/tmp/pl.json', JSON.stringify(writeObj), function () {
//
// });

// function handleDirFile() {
//     fs.wri
// }

/**
 * 获取路径下的所有文件和目录
 * @param path
 */
function getFileTree(path) {
    dirTree.push(path);
    // fs.readdir(path,"",function (err,files) {
    //     console.log(files[0]);
    // });
    // fs.readFile(files[1],"",function (err,data) {
    //     console.log(data);
    // });
    var files = fs.readdirSync(path);
    var i = 0;
    while (i < files.length) {
        var two = fs.statSync(path + "/" + files[i]);
        if (two.isDirectory() && files[i] !== "node_modules") {
            getFileTree(path + "/" + files[i]);
        } else {
            dirTree.push(path + "/" + files[i]);
        }
        i++;
    }
    // fs.stat(path,function (err,stats) {
    //     if(err){
    //         console.log(err.message);
    //     }else{
    //         if(stats.isDirectory()){
    //             fs.readdir();
    //         }
    //         console.log("是否是文件:1"+stats.isFile());
    //         console.log("是否是文件:2"+stats.isDirectory());
    //         console.log("是否是文件:3"+stats.isBlockDevice());
    //         console.log("是否是文件:4"+stats.isCharacterDevice());
    //         console.log("是否是文件:5"+stats.isSymbolicLink());
    //         console.log("是否是文件:6"+stats.isFIFO());
    //         console.log(stats.isSocket());
    //     }
    // })
};