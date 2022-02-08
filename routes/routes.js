let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

//get
router.get('/encargado', controller.getAttandant);
router.get('/trabajadores', controller.getWorkers);
router.get('/trabajador/:id', controller.getWorker)
router.get('/maquinas', controller.getMachines);
router.get('/maquina/:id', controller.getMachine);
router.get('/revision', controller.getLastReview);
router.get('/trabajo-actual', controller.getCurrentWork);
router.get('/trabajo-actual/:id', controller.getCurrentWork);
router.get('/trabajos-secundarios', controller.getToDo);

//post
router.post('/configuracion', controller.definedAttandant);
router.post('/trabajadores', controller.addWorker);
router.post('/maquinas', controller.addMachine);
router.post('/revision', controller.addLastReview);
router.post('/trabajo-actual', controller.saveCurrentWork);
router.post('/trabajos-secundarios', controller.savetoDo);


//put
router.put('/trabajador/:id', controller.updateWorker);
router.put('/maquina/:id', controller.updateActiveMachine);

//delete

router.delete('/trabajo-actual/:id', controller.deleteCurrentWork);
module.exports = router;