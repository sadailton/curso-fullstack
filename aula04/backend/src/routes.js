const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const NFController = require('./controllers/nfController');


routes.get('/users', UserController.listUsers);

routes.post('/autentica', UserController.autentica);

routes.post('/login', UserController.loginHeaders)

routes.post('/notafiscal/:nf', NFController.listNF)

module.exports = routes;