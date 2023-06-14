

const Koa = require('koa');

const server = new Koa();

const Router = require('koa-router');

const RouterAll = new Router();

const { koaBody } = require('koa-body');

const promiseFs = require('promise-fs');

const mysqlConnectionAll = require('./mysql/mysql.ts');

(async function(){

   server.context.mysqlData = await mysqlConnectionAll.mysql();  // mysql连接赋值给上下文context对象

})();

const { UserRouter,UserListClass } = require('./web/UserListClass.ts');

const { NewsRouter,NewsListClass } = require('./web/NewsListClass.ts');

const PORT = 5000;

server.listen(PORT,function(){
    console.log(`koa框架启动,端口号为：${PORT}`);
});

// 第一型use
//    1、洋葱模型
//    2、过滤整体的url地址   路由守卫
//    3、捕获
//    4、日志收集：文件操作
//    5、注意next位置写在哪？
server.use(async function(ctx:any,next:Function){
    // 写文件操作：
    // 1、 读404/500错误文件：  
    let fs404 = await promiseFs.readFileSync('./html/index.html');
    // 2、日志收集： 写文件    promise-fs
    await promiseFs.appendFile('./log/log4j.txt',`访问时间：${new Date()},访问地址：${ctx.request.url},${ctx.request.method}\n`)

    try{
      await next(); 
      if(!ctx.body){
        //  ctx.throw(404,`not found789`);
         ctx.response.status = 404;
         ctx.response.body = fs404.toString();
      }  
    }catch(e){
      throw e;
    }
})

// 用户功能：
let UserListObject = new UserListClass();
UserListObject.UserListMethod();       // 获取所有的用户数据
UserListObject.SigleUserListMethod();  // 获取单条用户数据  

// 新闻功能：
let NewsListObject = new NewsListClass();
NewsListObject.NewsListMethod();
NewsListObject.AddNewsListMethod();

// 组合所有的路由:
RouterAll.use(UserRouter.routes()); 
RouterAll.use(NewsRouter.routes());

// post传参模块
server.use(koaBody({multipart:true}));

// koa的use方法里面载入路由中间件
server.use(RouterAll.routes());   // 路由组合

export {server};
