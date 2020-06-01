const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req,res){
        const response = await req.body;
        User.create(response);
        res.json(response);
    },

    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },

    async listUsersBySex(req,res){
        const response = await User.find({ sex: req.params.sexo})
        res.json(response);
    },


    async listaUm(req,res){
        //const response = await User.findById('5ed04f832e0e0638a80f8a4b');
        const response = await User.findById(req.params.userid)
        res.json(response);
    },

    async listByAge(req,res){
        const response = await User.find().where('age').gt(33)
        res.json(response)
    },

    listManyFields(req,res){
        const response = req.query.fields;
        res.json(response);
    }
}