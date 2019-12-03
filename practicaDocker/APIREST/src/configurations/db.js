let mysql = require('mysql');
const {exec} = require('child_process');

let mysqlConecction;

mysqlConecction = mysql.createConnection({

  //host: process.env.DATABASE_HOST || 'localhost',
  host: 'localhost',
  user: 'remote',
  database: 'sysdb',
  password: 'remote',
  port: 3307
});

mysqlConecction.connect(function(err){

if(err){
console.log("********************** fail conection ***************************** " + err.message);

}else{
console.log("conneccion Correcta");
}
});

module.exports = mysqlConecction;


