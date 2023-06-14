
// persistent数据持久层:  msyql

// 两种方式：操作mysql

const mysqlConnection = require('../mysql/mysql.ts');

// 全局变量：
var mysqlData:any = '';
// 闭包
(async function(){

   mysqlData = await mysqlConnection.mysql();

})();

module.exports = {
  PersistentUserlist: async function(ctx:any,next:Function){
      // 操作mysql数据库:
      console.log('数据持久层');
      return await mysqlData.query(`select * from user`);
  },
  PersistentSigleUserList:async function(id:number){
      console.log('单条数据');
      return await mysqlData.query(`select * from user where id = ?`,[id]);  // 防止sql注入
  }
}


