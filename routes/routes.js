let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

//get
router.get('/configuracion', controller.getAttandant);
router.get('/trabajadores', controller.getWorker);
router.get('/revision', controller.getLastReview);

//post
router.post('/configuracion', controller.definedAttandant);
router.post('/nuevo-trabajador', controller.addWorker);
router.post('/revision', controller.addLastReview);

module.exports = router;