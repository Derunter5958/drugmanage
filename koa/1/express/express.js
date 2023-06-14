const expressServer = require('express')();
const {Router} =require('express');
const router = new Router();

const bodyParser=require('body-parser')

// expressServer.all('*', function (req, res, next) {
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Headers', 'Content-Type');
//       res.header('Access-Control-Allow-Methods', '*');
//       res.header('Content-Type', 'application/json;charset=utf-8');
//       next();
//     });

router.use('/user_login',function(req,res){
      res.send({
          message:{
             user:'administrator',
             status:1
          }  
      })
});

router.use('/a',function(req,res){
      res.send({ 
            msg: "数据",
            listData: [
               {name:"小明",age:17,sex:"男",pay:{pay1:1000,d:"微信支付"},favor:["爱吃","打乒乓球"],statusObj:{status:0,status_d:"添加"}},
            ]
     });
});

router.use('/ab',function(req,res){
      res.send({ 
            msg: "数据",
            listData: [
               {name:"小明",age:17,sex:"男",pay:{pay1:1000,d:"微信支付"},favor:["爱吃","打乒乓球"],statusObj:{status:0,status_d:"添加"}},
               {name:"小刚",age:18,sex:"男",pay:{pay1:2000,d:"支付宝"},favor:["爱学习","爱玩游戏","爱打篮球"],statusObj:{status:1,status_d:"编辑"}}
            ]
     });
});

router.use('/abc',function(req,res){
      res.send({ 
            msg: "数据",
            listData: [
                  {name:"小明",age:17,sex:"男",pay:{pay1:1000,d:"微信支付"},favor:["爱吃","打乒乓球"],statusObj:{status:0,status_d:"添加"}},
                  {name:"小刚",age:18,sex:"男",pay:{pay1:2000,d:"支付宝"},favor:["爱学习","爱玩游戏","爱打篮球"],statusObj:{status:1,status_d:"编辑"}},
                  {name:"小红",age:16,sex:"女",pay:{pay1:0,d:"银联"}, favor:["踢足球","爱学习"],statusObj:{status:2,status_d:"删除"}},
            ]
     });
});

router.get('/get_method',function(req,res){
      res.send({ 
            msg: "数据",
            listData: [
               {name:"小明",age:17,sex:"男",pay:{pay1:1000,d:"微信支付"},favor:["爱吃","打乒乓球"],statusObj:{status:0,status_d:"查询"}},
               {name:"小刚",age:18,sex:"男",pay:{pay1:2000,d:"支付宝"},favor:["爱学习","爱玩游戏","爱打篮球"],statusObj:{status:1,status_d:"编辑"}},
               {name:"小红",age:16,sex:"女",pay:{pay1:0,d:"银联"}, favor:["踢足球","爱学习"],statusObj:{status:2,status_d:"删除"}},
               {name:"小白",age:16,sex:"女",pay:{pay1:0,d:"挂账"}, favor:["踢足球","爱学习"],statusObj:{status:0,status_d:"查询"}}
            ]
     });

});

router.get('/manager_data',function(req,res){
      res.send({ 
          msgData:["用户管理","任务地图","数据图表","购物车管理"],
          msgDataNew:[
             {
                  rank:{
                     rank1:{
                        rank1_1:"用户管理",
                        rank2:{
                           rank2_1:[{name:"用户管理",path:'/user',class:'el-icon-edit'}],   
                           rank3:{
                               status:1,
                               rank3_1:"权限管理",
                               rank3_2:[{name:"角色配置",path:'/permission'}]
                           }  
                        }
                     }   
                  },
             },
             {
                  rank:{
                     rank1:{
                        rank1_1:"任务地图",
                        rank2:{
                           rank2_1:[{name:"任务地图",path:'/maps'}],
                           rank3:{
                               status:0,
                               rank3_1:"哈尔滨市地图",
                               rank3_2:['道里区地图','南岗区地图','道外地图',]
                           }  
                        }
                     }   
                  },
             },
             {
                  rank:{
                     rank1:{
                        rank1_1:"数据图表",
                        rank2:{
                           rank2_1:[{name:"折线图",path:'/dataecharts'},{name:"散点图",path:'/dataecharts'}],
                           rank3:{
                              status:0,
                              rank3_1:[]
                           }
                        }
                     }   
                  },
             },
             {
                  rank:{
                     rank1:{
                        rank1_1:"购物车管理",
                        rank2:{
                           rank2_1:[{name:"购物车管理",path:'/cart'}],
                           rank3:{
                              status:0,
                              rank3_1:[]
                           }
                        }
                     }   
                  }
             }
          ]
          
      });

})

router.post('/post_method',function(req,res){
      // res.sendStatus(300);
      res.send({
            msg: 'post数据'
      })
})

router.post('/login_method',function(req,res){
      // res.sendStatus(300);
      res.send({
            token: '1'
      })
})

expressServer.use(router)
expressServer.use(bodyParser.urlencoded({ extended: false }))
expressServer.use(bodyParser.json())

expressServer.listen(3000,function(){
      console.log(`express服务器启动...端口号为：${3000}`);
})



