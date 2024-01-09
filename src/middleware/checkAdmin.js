const express = require('express');
const router = express.Router();
const users = ['ada','greta','jim','tim'];

function checkAdmin(req, res, next){
    const user = req.query.user.toLowerCase();
    if (users.includes(user)){
        next()
    }else{
        res.send('este usuario no tiene permisos de administador')
    }
}
module.exports = checkAdmin