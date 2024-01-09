const fs =require ('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller={
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('index', {title:"Cinema FM-VC",products, toThousand})
    },
    
    login:(req,res)=>{
        res.send(`Bienvenido administrador/a: ${admin}`);
    }
}
module.exports = controller;