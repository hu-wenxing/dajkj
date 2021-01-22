//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
const pool=mysql.createPool({
  // 新浪云上的配置参数
  host     : process.env.MYSQL_HOST,
  port     : process.env.MYSQL_PORT,
  user     : process.env.ACCESSKEY,
  password : process.env.SECRETKEY,
  database : 'app_' + process.env.APPNAME,
  connectionLimit:'20'
});
//导出连接池对象
module.exports=pool;