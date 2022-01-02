let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

//get
router.get('/configuracion', controller.getAttandant);
router.get('/trabajadores', controller.getWorkers);
router.get('/trabajador/:id', controller.getWorker)
router.get('/maquinas', controller.getMachines);
router.get('/maquina/:id', controller.getMachine);
router.get('/revision', controller.getLastReview);

//post
router.post('/configuracion', controller.definedAttandant);
router.post('/trabajadores', controller.addWorker);
router.post('/maquinas', controller.addMachine);
router.post('/revision', controller.addLastReview);


//put
router.put('/trabajadores/:id')
module.exports = router;