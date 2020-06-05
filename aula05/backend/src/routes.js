const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.get('/user/:id',UserController.listByID);
routes.post('/users',UserController.persistUser);
routes.get('/users',UserController.listUsers);
routes.get('/userGit',UserController.getUserGit);

//Login
routes.post('/login/:username',UserController.login)

module.exports = routes;