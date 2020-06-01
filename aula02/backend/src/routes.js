const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const NFController = require('./controllers/nfController');


//routes.get('/users', UserController.listUsers);

/*routes.post('/autentica', UserController.autentica);

routes.post('/login', UserController.loginHeaders)

routes.post('/notafiscal/:nf', NFController.listNF)*/

routes.post('/user', UserController.persistData);

routes.get('/user', UserController.listUsers);

routes.get('/userBySex/:sexo', UserController.listUsersBySex);

routes.get('/userUm/:userid', UserController.listaUm);

routes.get('/listByAge', UserController.listByAge);
routes.get('/userFields/:fields', UserController.listManyFields);

module.exports = routes;