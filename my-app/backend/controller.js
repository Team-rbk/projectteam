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
const SignUpClient=  async (req,res)=>{
    const x = await db.SignUpc(req.body)
    try{
        res.send(x)
    }
    catch(e){console.log(e);
  }
}

const GetallUserE =async (req,res)=>{
    const x = await db.getalle()
    try{
        res.send(x)
    }
    catch(e){ console.error(e)}
}

const GetallUserC =async (req,res)=>{
    const x = await db.getallc()
    try{
        res.send(x)
    }
    catch(e){ console.error(e)}
}

const SignINClient=async(req,res)=>{
    try{
        const x = await db.SignInc(req.body)
        console.log(x[0]);
        res.json(x[0])
        
    }
    catch(e){console.log(e)}
}
const SignINEmployer=async(req,res)=>{
    try{
        const x = await db.SignIne(req.body)
        console.log(x[0]);
        res.json(x[0])
    }
    catch(e){console.log(e)}
}



const SignUpEmployer=  async (req,res)=>{
    const x = await db.SignUpe(req.body)
    try{
        res.send(x)
    }
    catch(e){console.log(e);
  }
}
const getposts= async (req,res)=>{
    const x= await db.getAllposts()
  
  try{
      res.send(x[0])
  }
  catch(err){
  console.log(err);
  }
  }
const feedback=async (req,res)=>{
    const x= await db.Getuserreview(req.params.id)
  
    try{
        res.send(x[0])
    }
    catch(err){
    console.log(err);
    }
    
}
const updatetheemployer= async (req,res)=>{
    const x= await db.updateEmployer(req.body,req.params.id)
  
    try{
        res.send(x[0])
    }
    catch(err){
    console.log(err);
    }
}

    module.exports={SignINEmployer,GetallUserE,SignINClient,GetallUserC,SignUpClient,SignUpEmployer , getposts ,updatetheemployer ,feedback  }