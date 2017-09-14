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


// var prepath='app/models/';
// var filetype='js';
// var filename='';
// console.log(path.indexOf(prepath)+prepath.length);
// filename=path.substring(path.indexOf(prepath)+prepath.length,path.length-filetype.length-1);
// console.log(filename);

//原始目录机构数据
// {
//     "data": [
//     "app",
//     "app/controllers",
//     "app/controllers/index.js",
//     "app/controllers/plan.js",
//     "app/controllers/playlist.js",
//     "app/controllers/song.js",
//     "app/controllers/user.js",
//     "app/factory",
//     "app/factory/controllersmaster.js",
//     "app/factory/modelsmaster.js",
//     "app/factory/proxymaster.js",
//     "app/models",
//     "app/models/index.js",
//     "app/models/plan.js",
//     "app/models/playlist.js",
//     "app/models/song.js",
//     "app/models/user.js",
//     "app/proxy",
//     "app/proxy/index.js",
//     "app/proxy/plan.js",
//     "app/proxy/playlist.js",
//     "app/proxy/song.js",
//     "app/proxy/user.js"
// ]
// }

// 需要的数据结构是
// var res = {
//     "data": [{
//         name: "app",
//         open: true,
//         children: [{
//             name: "controllers",
//             open: true,
//             children: [{name: "index.js"}, {name: "plan.js"}, {name: "playlist.js"}, {name: "song.js"}, {name: "user.js"}]
//         }, {
//             name: "factory",
//             children: [{name: "controllersmaster.js"}, {name: "modelsmaster.js"}, {name: "proxymaster.js"}]
//         }, {
//             name: "models",
//             children: [{name: "index.js"}, {name: "plan.js"}, {name: "playlist.js"}, {name: "song.js"}, {name: "song.js"}]
//         }, {
//             name: "proxy",
//             children: [{name: "index.js"}, {name: "plan.js"}, {name: "playlist.js"}, {name: "song.js"}, {name: "user.js"}]
//         }]
//     }]
// }


// var dirjson = require('./dir.json');
// var dirarr=dirjson.data;
// var finallyArr=[];
//
// //转换数据结构
// function handArr(arr) {
//     var len=arr.length;
//     for(var i=0;i<len;i++){
//         var item=arr[i];
//         var itemArr=item.split("/");
//         if(itemArr.length>1){
//             var fronEle=findFronEle(itemArr[0],finallyArr);
//             finallyArr[fronEle].children.push(itemArr[1]);
//
//         }else{
//             var obj={name:item,children:[]}
//             finallyArr.push(obj);
//         }
//     }
// }
//
// //找到前一个节点
// function  findFronEle(str,arr) {
//     var len=arr.length;
//     for(var i=0;i<len;i++){
//         var item=arr[i];
//         if(item.name==str){
//             return i;
//         }
//     }
//     return -1;
// }
//
// handArr(dirarr);
//
// console.log(finallyArr);
//
// [{name: "三国演义", status: 0}, {name: "水浒传", status: 1}, {name: "西游记", status: 0}, {
//     name: "金瓶梅",
//     status: 0
// }].forEach(function (item,index) {
//     $.post('/book/add-post',item, function (res) {
//         console.log("成功"+index);
//     }, 'json');
// });

// $.post('/book/add-post',{name:红楼梦,status:0},function (res) {
//     console.log(res);
// },'json');