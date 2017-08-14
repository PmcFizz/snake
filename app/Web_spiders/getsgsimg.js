/**
*获取三国杀武将图片
2017年8月10日15:24:57 第一版
**/
var superagent=require("superagent");
var fs=require("fs");
var cheerio=require("cheerio");
var async=require("async");
var http=require("http");
var request=require("request");

var setData={
	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Referrer': 'www.baidu.com',
    'Content-Type': 'text/plain; charset=UTF-8'
}
getAllChapters();
function getAllChapters(){
	var baseUrl="http://gl.sanguosha.com/";	 
	superagent.get(baseUrl)
			  .set(setData)
			  .end(function(err,res){
			  	if(err) return null;			  
			  	var $=cheerio.load(res.text);
			  	var chapterArr=[];
			  	var $list=$(".heros img");

			  	for(var i=0;i<$list.length;i++){
			  		var item=$($list[i]);	  		 
			  		var itemHref=item.attr('src');
			  		chapterArr.push({title:i,href:itemHref});
			  	}
			  	 
			  	async.mapLimit(chapterArr,10,function(chap,cb){			  		 
			  		request.head(chap.href,
							function(err){
								request(chap.href).pipe(fs.createWriteStream("server/data/sgswgimg/"+chap.title+".jpg"));
							}
						)
						cb(null,null);				
			  	},function(err,res){
			  		console.log("**********抓包结束**********");
			  	})
			  })
}
