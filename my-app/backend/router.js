const Router = require('express').Router();
const Controller=require('./controller')
Router.get('/profileclient/:id',Controller.getoclient)
Router.get('/worker',Controller.getalworker)
Router.get('/dashboardclient/:id',Controller.getoclient)
Router.post('/postjob',Controller.postjobc)

module.exports=Router