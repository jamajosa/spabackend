const GamesController = require ('../controllers/games_controller')
const DeveloperController = require ('../controllers/developer_controller')
const CompanyController = require ('../controllers/company_controller')
const UserController = require('../controllers/user_controller');
const express= require('express');
const jwtHelper = require('../config/jwtHelper');
module.exports = (app) => {

  //gamescontroller
  app.get('/api', GamesController.greeting);
  app.get('/api/games/:id', GamesController.readById);
  app.get('/api/games', GamesController.read);
  app.post('/api/games', GamesController.create);
  app.put('/api/games/:id', GamesController.edit);
  app.delete('/api/games/:id', GamesController.delete);
  app.put('/api/gamesComp/:id', GamesController.addComp);

  //developercontroller
  app.get('/api/developers/:id', DeveloperController.readById);
  app.get('/api/developers', DeveloperController.read);
  app.post('/api/developers', DeveloperController.create);
  app.put('/api/developers/:id', DeveloperController.edit);
  app.delete('/api/developers/:id', DeveloperController.delete);

  //companycontroller
  app.get('/api/companies/:id', CompanyController.readById);
  app.get('/api/companies', CompanyController.read);
  app.post('/api/companies', CompanyController.create);
  app.put('/api/companies/:id', CompanyController.edit);
  app.delete('/api/companies/:id', CompanyController.delete);
  app.put('/api/companiesDevs/:id/', CompanyController.addDev);

  //userroutes
  app.post('/api/users/register',UserController.register);
  app.get('/api/users',UserController.read);
  app.post('/api/authenticate',UserController.authenticate);
  app.get('/api/userprofile',jwtHelper.verifyJwtToken,UserController.userProfile);
};
