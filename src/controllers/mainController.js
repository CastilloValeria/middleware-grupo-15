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
        const user = req.query.user;
        res.send(`Bienvenido Administrador/a:${user}`)
    }
}




module.exports = mainControllers;
