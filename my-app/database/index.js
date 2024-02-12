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
 const getAllposts=()=>{
  sql="SELECT c.idclient, c.namec, c.lastnamec, c.emailc, c.addressc, c.descriptionc, c.imagec, p.idpost, p.imagep, p.statutp, p.titlep FROM teamproject.client c JOIN teamproject.post p ON c.idclient = p.client_idclient;"
  return connection.query(sql)
  }
  const Getuserreview=(id)=>{
    sql = "SELECT c.idclient, c.namec, c.lastnamec, c.emailc, c.addressc, c.descriptionc, c.imagec, f.feedbackf FROM client c JOIN feedback f ON c.idclient = f.client_idclient JOIN employer e ON f.employer_idemployer = e.idemployer WHERE e.idemployer = ?";

  return connection.query(sql,id)
  }
const updateEmployer=(toup,id)=>{
  sql="UPDATE employer SET ? WHERE idemployer = "+id
  return connection.query(sql,toup,id)
}


  module.exports={getalle,SignIne,SignInc,SignUpe,SignUpc,getallc , getallworker,getoneclient,postjob ,getAllposts , Getuserreview , updateEmployer };



