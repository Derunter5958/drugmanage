
// 接收参数：  路由

// 导入router路由模块：

const Router = require('koa-router');

const NewsRouter = new Router();

const Controller = require('../controller/NewsListController.ts');

import { NewsListInterface } from '../interface/interface';
var { NewsListParams }= require('../paramsEncap/NewsListParams')
class NewsListClass implements NewsListInterface<number,string>{
    public init:string = '';
    public id:number = 0;
    constructor(init:string){
        this.init = init;
    }
    NewsListMethod(){
        NewsRouter.get('/newslist',async function(ctx:any,next:Function){
            // 调用controller层
            // 返回所有的数据
            let NewsList = await Controller.ControllerNewsList(ctx,next);  // 不要画蛇添足
            if(NewsList && NewsList.length > 0){
                ctx.request.body = NewsList;
            }else{
                ctx.request.body = [];
            }
            console.log('NewsList:',NewsList);
            ctx.body = NewsList;
            await next();
        });  
    }
    AddNewsListMethod(){
        // post传参的时候：  koaBody  看错了
        NewsRouter.post("/addnewslist",async function(ctx:any,next:Function){
            // 接收参数： 
            console.log('post数据',ctx.request.body)

            ctx.response.body = '123';
            await next();
        })
    }
}

//导出router

module.exports = {NewsRouter,NewsListClass};