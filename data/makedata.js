/**
 * Created by FizzPang on 2017/8/11.
 */

// let question = {
//     one: [],
//     two: [],
//     three: []
// };
//
// for (let i = 0; i < 36; i++) {
//     let item = {"chinese": "", "english": "", "myanswer": ""};
//     if (i < 12) {
//         question.one.push(item);
//     } else if (i < 24) {
//         question.two.push(item);
//     } else {
//         question.three.push(item);
//     }
// }
//
// console.log(question);

//使用fs模块逐行读取question.txt
let fs = require('fs');
let readline = require('readline');
let fsBuffer = fs.createReadStream('question.txt');

let objReadLine = readline.createInterface({input: fsBuffer});

let index = 1,
    question = {
        one: [],
        two: [],
        three: []
    };

var item={};
objReadLine.on('line', (line) => {
    if(index%2===0){
        item.chinese=line.trim();
        item.myanswer="";
        if(index<26){
            question.one.push(item);
        }else if(index<52){
            question.two.push(item);
        }else if(index<78){
            question.three.push(item);
        }
        index++;
        item={};
    }else if(index%2===1){
        item.english=line.trim();
        index++;
    }
});

objReadLine.on('close',()=>{
    fs.writeFile('ques.json',JSON.stringify(question),(err)=>{
        if(err) console.log(err.message);
        console.log("写入成功!");
    })
});
