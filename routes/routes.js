let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

//get
router.get('/configuracion', controller.getAttandant);
router.get('/trabajadores', controller.getWorker);
router.get('/machines', controller.getMachines);
router.get('/revision', controller.getLastReview);

//post
router.post('/configuracion', controller.definedAttandant);
router.post('/trabajadores', controller.addWorker);
router.post('/machines', controller.addMachine);
router.post('/revision', controller.addLastReview);

module.exports = router;