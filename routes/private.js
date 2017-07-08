module.export=function(app){

	//用户模块
	app.use('/user',require(CONTROLLERS+'/user'));

	//计划模块
	app.use('/plan',require(CONTROLLERS+'/plan'));

	//极客模块
	app.use('/geek',require(CONTROLLERS+'/geek'));

	//工作模块
	app.use('/work',require(CONTROLLERS+'/work'));

	//学习模块
	app.use('/study',require(CONTROLLERS+'/study'));

	//书籍模块
	app.use('/book',require(CONTROLLERS+'/books'));

	//朋友模块
	app.use('/friend',require(CONTROLLERS+'/friend'));



	
}