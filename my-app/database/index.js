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

//Singup for Client & Employer
const SignUpe =(value,callback)=>{
  const sql = "INSERT INTO employer SET ? "
  connection.query(sql,[value],function(err,results){
    callback(err,results)
  })
}
const SignUpc =(value)=>{
  const sql = "INSERT INTO client SET ?"
 return  connection.query(sql,value)}

 //SignIn for Client &  Employer

 const SignInc =(value)=>{
  const sql = "SELECT * FROM client WHERE `emailc`=?  AND  `passwordc`=?"
 return  connection.query(sql,[value.email,value.password])}

 const SignIne =(value)=>{
  const sql = "SELECT * FROM employer WHERE `emaile`=?  AND  `passworde`=?"
 return  connection.query(sql,[value.email,value.password])}

//  Getting All  Data from Client & Employer
 const getallc=()=>{
  const sql= "SELECT * FROM client"
  return connection.query(sql)
 }
 const getalle=()=>{
  const sql= "SELECT * FROM employer"
  return connection.query(sql)
 }

module.exports={getalle,SignIne,SignInc,SignUpe,SignUpc,getallc};

