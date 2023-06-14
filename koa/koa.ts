import { url } from "inspector";

const Koa = require('koa');

const server = new Koa();

const Router = require('koa-router');

const RouterAll = new Router();

const { koaBody } = require('koa-body');

const path = require('path');  // 系统模块

var p = path.resolve(__dirname,'statics');    // 路径

// 静态资源： koa-static模块

// js原生里面：有一个关键字   严格模式 ---> static   

const statics =require('koa-static');

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

// 库存功能：
let UserListObject = new UserListClass();
UserListObject.UserListMethod();       // 获取所有的用户数据
UserListObject.SigleUserListMethod();  // 获取单条用户数据  

// 采购功能：
let NewsListObject = new NewsListClass();
NewsListObject.NewsListMethod();
NewsListObject.AddNewsListMethod();

// 组合所有的路由:
RouterAll.use(UserRouter.routes()); 
RouterAll.use(NewsRouter.routes());

// post传参模块
server.use(koaBody({multipart:true}));


// 静态资源操作：可以写在整个路由中间件的最下面
// server.use(statics(`静态资源的路径`,{'静态资源的最大生存时间'|"进入的第一访问文件"}))
// `select * from users where id = ?`,[id]   // sql安全 
// RouterAll.all(正则);  【我想让某些人能执行，不是所有人都执行】
// 目前你是提供了所有文件能够访问： 做的不够安装    .exe|.bat   安全性      
// server.use(statics('./statics',{
//     // maxage:`3*86400*1000`,   // 这些资源的生存时间: 缓存
//     //  index:'style.css'
// }))
// server.use(statics(`./statics`))

RouterAll.all(/(\.png|\.jpg)$/i,statics('./statics/imges',{
  maxage:1*86400*1000
}));

RouterAll.all(/(\.js)$/i,statics('./statics/js',{
   maxage:1*86400*1000
}));

RouterAll.all(/\.(css)$/i,statics('./statics/css',{
  maxage:1*86400*1000
}))

// koa的use方法里面载入路由中间件
server.use(RouterAll.routes());   // 路由组合

export {server};
