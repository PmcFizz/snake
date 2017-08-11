module.exports=function(app){

	//用户模块
	app.use('/user',require(CONTROLLERS+'/user'));

	//计划模块
	app.use('/plan',require(CONTROLLERS+'/plan'));

    //兴趣模块
    app.use('/interest',require(CONTROLLERS+'/interest'));

	//任务模块
	app.use('/task',require(CONTROLLERS+'/task'));


    //socket模块
    app.use('/socket',require(CONTROLLERS+'/socket'));

	//极客模块
	// app.use('/geek',require(CONTROLLERS+'/geek'));

	//工作模块
	// app.use('/work',require(CONTROLLERS+'/work'));

	//学习模块
	// app.use('/study',require(CONTROLLERS+'/study'));

	//书籍模块
	app.use('/book',require(CONTROLLERS+'/book'));

	//朋友模块
	// app.use('/friend',require(CONTROLLERS+'/friend'));
	
}
