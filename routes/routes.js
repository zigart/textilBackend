let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.get('/configuracion', controller.getAttandant);
router.post('/encargado', controller.definedAttandant);


module.exports = router;