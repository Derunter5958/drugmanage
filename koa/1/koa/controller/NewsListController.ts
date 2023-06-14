
// controller层：业务层

const PersistentNews = require('../persistent/NewsListPersistent.ts');

module.exports = {
   ControllerNewsList:async function(ctx:any,next:Function){  // 参数：属于顶层参数
      // 调用:数据持久层
      console.log('controller层所有数据');
      // 核心的逻辑写在controller层
      return await PersistentNews.PersistentNewslist(ctx,next);
   }
}