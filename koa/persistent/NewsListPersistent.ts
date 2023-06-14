
// persistent数据持久层:  mysql

// 两种方式：操作mysql     

const mysqlConnectionNews = require('../mysql/mysql.ts');

// 全局变量：
var mysqlDataNews:any = '';
// 闭包
(async function(){

   mysqlDataNews = await mysqlConnectionNews.mysql();

})();

module.exports = {
  PersistentNewslist: async function(ctx:any,next:Function){
      // 操作mysql数据库:
      console.log('数据持久层');
      return await mysqlDataNews.query(`select * from medicine_table`);
  },

  PersistentAddlist: async function(id:number){
    console.log('采购操作');
    return await mysqlDataNews.query(`UPDATE kucun SET Medicine_Inventory = Medicine_Inventory + {scope.row.quantity} WHERE Medicine_Id = {1};`)
    
 }

}
