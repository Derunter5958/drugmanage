
// controller层：业务层

const Persistent = require('../persistent/UserListPersistent.ts');

module.exports = {
   ControllerUserList:async function(ctx:any,next:Function){  // 参数：属于顶层参数
       
      // 调用:数据持久层

      console.log('controller层所有数据');

      // 核心的逻辑写在controller层
      
      return await Persistent.PersistentUserlist(ctx,next);

   },
   ControllerSigleUserList:async function(id:number){  // id在数据库中：number <--->  int
      console.log('controller层单条数据');
      return await Persistent.PersistentSigleUserList(id); 
   }     
}