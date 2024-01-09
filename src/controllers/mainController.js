const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../dataBase/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const mainControllers = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('index', {title:"Cinema FM-VC",products, toThousand})
        
    },
    login:(req,res)=>{
        const admin = req.query.user;
        res.send(`Bienvenido Administrador/a:${admin}`)
    }
}




module.exports = mainControllers;
