const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.post('/users', UserController.persistUser);
routes.get('/users', UserController.listUSers);
routes.get('/usergit', UserController.getUserGit);
routes.get('/usersgit2020', UserController.getUserGit2020);

module.exports = routes;