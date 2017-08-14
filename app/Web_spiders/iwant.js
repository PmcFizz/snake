/**
*从风之动漫获取进击的巨人所有漫画
*2017年6月20日第一版
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
var folder="server/data/download/";

getAllChapters();
function getAllChapters(){
	var baseUrl="http://manhua.fzdm.com/39/";	 
	superagent.get(baseUrl)
			  .set(setData)
			  .end(function(err,res){
			  	if(err) return null;
			  	var $=cheerio.load(res.text);
			  	var chapterArr=[];
			  	var $list=$(".pure-u-1-2.pure-u-lg-1-4");
			  	for(var i=0;i<$list.length;i++){
			  		var item=$($list[i]).find("a");
			  		var itemHref=item.attr("href");
			  		var itemTitle=item.attr("title");
			  		chapterArr.push({title:itemTitle,href:itemHref});
			  	}

			  	async.mapLimit(chapterArr,5,function(chap,cb){
			  		getImgUrlByChapter(chap.href,chap.title,cb);
			  	},function(err,res){
			  		console.log("**********抓包结束**********");
			  	})
			  })
}

//获取某一章的所有图片路径
function getImgUrlByChapter(chapterHref,chapterTitle,getCb){
	var fetchImgUrl=function(index,cb){
		var imgHtml='http://manhua.fzdm.com/39/'+chapterHref+'index_' + index + '.html';		 
		superagent.get(imgHtml)
				  .set(setData)
				  .end(function(err,res){
				  	if(err){
				  		cb(null,null);
				  		return null;
				  	}
				  	var $=cheerio.load(res.text);
				  	var imgurl="http:"+$("#mhpic").attr("src").replace("http:","");
				  	var title=$("title").text();
				  	if(imgurl){
				  		cb(null,{title:title,imgurl:imgurl})
				  	}else{
				  		cb(null,null);
				  	}
				  })
	}
	var arr=[];
	for(var i=0;i<100;i++){
		arr.push(i);
	}
	async.mapLimit(arr,10,function(index,callback){
		fetchImgUrl(index,callback);
	},function(err,result){
		var handArr=result.filter(function(ite){
			return ite;
		})
		console.log("一章获取完整");
		fs.exists("server/data/download/"+chapterTitle,function(res){
				if(!res){
					fs.mkdirSync("server/data/download/"+chapterTitle,function(err){
						getImgSaveFile(handArr);
					})
				}else{
					getImgSaveFile(handArr);
				}
		})

		function getImgSaveFile(imgUrlArr){
			console.log("******开始请求图片数据******");
			async.every(imgUrlArr,function(item,ecb){
				var fileName=item.title.replace(" ","");
				request.head(item.imgurl,function(err){
						request(item.imgurl).pipe(fs.createWriteStream("server/data/download/"+chapterTitle+"/"+fileName+".jpg"));
				})
				ecb(null,null);
			},function(err,res){
				getCb(null,null);
			})
		}
	})
}