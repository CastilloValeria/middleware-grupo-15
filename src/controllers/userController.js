const path = require('path');
const fs = require('fs');


module.exports = {
    register: function (req, res) {
        res.render("user/register");
    },
}