const fs = require('fs');

function logMiddlewar (req,res,next) {
    fs.appendFileSync('log.txt', "se ingresó en la ruta:" + req.url + '\n');
    next();
}

module.exports = logMiddlewar