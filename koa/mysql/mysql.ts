// promise-mysql模块要抽取出来
const mysql = require('promise-mysql');

// module.exports = function(){}

exports.mysql = function(){     //  不需要写：async await 
   return mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'123456',
      port:'3306',
      database:'ms',
     });
}