const express = require('express');
const server = express();
const mongoose = require('mongoose');

//Banco de dados
mongoose.connect('mongodb+srv://admin:admin@cluster0-jng2g.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

//Import Models
require('./src/models/UserModel');

//Config
server.use(express.json());

//Routes
server.use('/api', require('./src/routes'));

server.listen(3002);
console.log('Servidor escutando na porta 3002');
