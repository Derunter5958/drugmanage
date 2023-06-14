
// 接收参数：  路由

// 导入router路由模块：

const Router = require('koa-router');

const UserRouter = new Router();

// const Controller = require('../controller/controller.ts');

const Controller = require('../controller/UserListController');

// const Interface = require('../interface/interface.ts'); // 检测接口是否：没成功

// console.log('接口',Interface);

// 如果在导入接口的时候，出现了空对象的时候，改用其他的方式进行导入。  import 导入接口很好用

import { UserListInterface } from '../interface/interface'; // 如果是import的方式，不能写.ts

var { UserListParams }= require('../paramsEncap/UserListParams.ts');

// console.log('接口',UserListInterface); // 报出错误   【不要在意】

// 1、类的方式：   ts  class    ---->  面向对象
// 2、接口的方式:  interface接口关键字

class UserListClass implements UserListInterface<number,string>{ // 泛型<写动态的类型>
    public init:string = '';
    public id:number = 0;
    constructor(init:string){
        this.init = init;
    }
    UserListMethod(){
        UserRouter.get('/userlist',async function(ctx:any,next:Function){
            // 调用controller层
            // 返回所有的数据
            let UserList = await Controller.ControllerUserList(ctx,next);  // 不要画蛇添足
            if(UserList && UserList.length > 0){
                ctx.request.body = UserList;
            }else{
                ctx.request.body = [];
            }
            console.log('UserList:',UserList);
            ctx.body = UserList;
            // ctx.body = "userlist接口";
            await next();
        });  
    }
    SigleUserListMethod(){
        UserRouter.get('/SigleUserList/:Medicine_Id',async function(ctx:any,next:Function){
            var { id } = ctx.params;

            console.log('用户id',id);

            // 封装传递过来的参数：    
 
            var ULP = new UserListParams();
            ULP.setId(id);

            var SigleUserList = await Controller.ControllerSigleUserList(ULP.getId());
            if(SigleUserList && SigleUserList.length > 0){
                ctx.body = SigleUserList;
            }else{
                ctx.body = [] || '';
            }
            console.log('SigleUserList',SigleUserList);
            ctx.body = SigleUserList;
            await next();
        })
    }
}



//导出router

module.exports = {UserRouter,UserListClass};