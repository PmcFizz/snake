/**
 * Created by pangmengchen on 12/4/16.
 */
global.BASEDIR = __dirname;
global.CONTROLLERS=BASEDIR+'/app/controllers';
global.MODELS=BASEDIR+'/app/models';
global.PROXY=BASEDIR+'/app/proxy';

//global return success
global.returnSUCCESS=function (res,data) {
    return res.json({'code':200,'data':data});
};

//global return fail
global.returnFAIL=function (res,data) {
    return res.json({'code':500,'data':data});
};