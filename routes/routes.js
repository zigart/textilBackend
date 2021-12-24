let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');


router.get('/', controller.getWorker);


module.exports = router;