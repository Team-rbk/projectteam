const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'teamproject'
}).promise();

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});
const getallworker=()=>{
  const sql='select * from employer'
  return connection.query(sql)
}
const getoneclient=(id)=>{
  const sql='select * from client where idclient=?'
  return connection.query(sql,id)
}

const postjob=(obj)=>{
  const sql=' insert into post SET ?  '
  return connection.query(sql,obj)
}
module.exports = {getallworker,getoneclient,postjob}

