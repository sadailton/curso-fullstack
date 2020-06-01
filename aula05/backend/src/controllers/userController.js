const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    // async persistUser(req,res){
    //     const payload = await req.body;
    //     User.create(payload);
    //     res.json(payload)
    // },

    async persistUser(req,res){
        const {userGit} = req.body;
        //const response = await axios.get(`https://api.github.com/users/${userGit}`)
        res.json(userGit.login);
        res.send().status(200);
    },

    async listUSers(req,res){
        const response = await User.find();
        res.json(response);
    },

    async getUserGit(req,res){
        const response = await axios.get('https://api.github.com/users')
        res.json(response.data);
        
        //data = new Date(response.data.created_at)
        //res.send(`Data: ${data.getFullYear()}`)
    },

    async getUserGit2020(req,res){
        const response = await axios.get('https://api.github.com/users')
        const usuariosGit = response.data;
        usuariosGit.map((item, key) => {
            console.log(item)
        })
        
    }

    //1 - Persistir no banco usuários do Git
    //2 - Persistir no banco usuários criados antes de 2020.
    //3 - Calcular a distância entre duas coordenadas (latitude, longitude).
}