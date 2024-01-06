const { lectura, escritura } = require("../utility/moduloProp");
const fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        res.render("products", {products: lectura("productsDataBase"),toThousand})
    },
    detail:(req,res)=>{},

    create:(req,res)=>{},

    store:(req,res)=>{},

    edit:(req,res)=>{
    const { id } = req.params;
    const products = lectura("productsDataBase");
    const product = products.find((producto) => producto.id == id);
    res.render("product-edit-form",{title:product.name,product,toThousand});},
    
    update:(req,res)=>{},

    destroy:(req,res)=>{},
};
module.exports = controller;