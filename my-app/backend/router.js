const Router = require('express').Router();
const Controller=require('./controller')
Router.get('/profileclient/:id',Controller.getoclient)
Router.get('/worker',Controller.getalworker)
Router.get('/dashboardclient/:id',Controller.getoclient)
Router.post('/postjob',Controller.postjobc)
Router.post("/SignUpc",Controller.SignUpClient)
Router.post("/SignInc",Controller.SignINClient)

Router.get( "/GetUserc" ,Controller.GetallUserC)
Router.get( "/GetUsere" ,Controller.GetallUserE);

Router.post("/SignUpe",Controller.SignUpEmployer)
Router.post("/SignIne",Controller.SignINEmployer)
Router.get('/getAllposts',Controller.getposts)
Router.get("/getfeedback/:id",Controller.feedback)
Router.put('/updatetheemployer/:id',Controller.updatetheemployer)

module.exports=Router