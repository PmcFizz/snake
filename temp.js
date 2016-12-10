/**
 * Created by fizz on 16-12-10.
 * 临时代码 代码片段
 */
// var fs = require('fs');
//
// fs.writeFile('app/controllers/tmp/pl.json', "1111111111", function (err) {
//     if (err) {
//         console.log(err.message)
//     }
//     ;
// });
// fs.readFile('app/controllers/tmp/pl.json', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(data);
//     }
// })
// var pl = fs.readFileSync("app/controllers/tmp/pl.json", 'utf-8');
// console.log(pl);
//
// fs.unlink("app/controllers/tmp", function (err) {
//     if (err) {
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
//
// function handleDirFile() {
//     fs.wri
// }
// fs.readdir(path, "", function (err, files) {
//     console.log(files[0]);
// });
// fs.readFile(files[1], "", function (err, data) {
//     console.log(data);
// });
//
// fs.stat(path, function (err, stats) {
//     if (err) {
//         console.log(err.message);
//     } else {
//         if (stats.isDirectory()) {
//             fs.readdir();
//         }
//         console.log("是否是文件:1" + stats.isFile());
//         console.log("是否是文件:2" + stats.isDirectory());
//         console.log("是否是文件:3" + stats.isBlockDevice());
//         console.log("是否是文件:4" + stats.isCharacterDevice());
//         console.log("是否是文件:5" + stats.isSymbolicLink());
//         console.log("是否是文件:6" + stats.isFIFO());
//         console.log(stats.isSocket());
//     }
// })
//
// var watcher=gulp.watch('app/**/*.js');
// watcher.on('changed',function (even) {
//     console.log("changed even");
// });
// watcher.on('added',function (even) {
//     console.log("added even");
// });
// watcher.on('deleted',function (even) {
//     console.log("deleted even");
// });


var prepath='app/models/';
var filetype='js';
var filename='';
console.log(path.indexOf(prepath)+prepath.length);
filename=path.substring(path.indexOf(prepath)+prepath.length,path.length-filetype.length-1);
console.log(filename);
