const db = require ('../database/index')


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
        console.log(x);
        res.json(x)
        
    }
    catch(e){console.log(e)}
}
const SignINEmployer=async(req,res)=>{
    try{
        const x = await db.SignIne(req.body)
        console.log(x);
        res.json(x)
        
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

  module.exports={SignINEmployer,GetallUserE,SignINClient,GetallUserC,SignUpClient,SignUpEmployer}