const db=require('../database/index')
exports.postjobc=async function(req,res){
    try{
        const job = req.body
       const x= await db.postjob(job)
       res.send(x)
    }catch(err){
        console.log(err);
      }
}
exports.getalworker=async function(req,res){
    try{
        const x=await db.getallworker()
        res.send(x)
    }catch(err){
        console.log(err);
      }
}
exports.getoclient=async function(req,res){
    try{
        const id=req.params.id
        const x=await db.getoneclient(id)
        res.send(x)
    }catch(err){
        console.log(err);
      }
}