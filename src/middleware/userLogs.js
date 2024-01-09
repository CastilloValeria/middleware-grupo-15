const fs = require('fs');
const path = require('path');

function logMiddlewar (req,res,next) {
    fs.appendFileSync(path.join(__dirname,'../logs/log.txt'), "se ingresó en la ruta:" + req.url + '\n');
    next();
}
module.exports = logMiddlewar