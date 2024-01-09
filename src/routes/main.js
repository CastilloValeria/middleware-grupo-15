const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/admin', checkAdmin, mainController.login)

module.exports = router;


