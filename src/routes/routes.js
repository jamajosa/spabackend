const GamesController = require ('../controllers/games_controller')
const DeveloperController = require ('../controllers/developer_controller')
const CompanyController = require ('../controllers/company_controller')
module.exports = (app) => {

  //gamescontroller
  app.get('/api', GamesController.greeting);
  app.get('/api/games/:id', GamesController.readById);
  app.get('/api/games', GamesController.read);
  app.post('/api/games', GamesController.create);
  app.put('/api/games/:id', GamesController.edit);
  app.delete('/api/games/:id', GamesController.delete);
  //app.put('/api/gamesPush/:id', GamesController.pushACompany);

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

};
