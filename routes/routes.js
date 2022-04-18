let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

//get
router.get('/encargados', controller.getAttendants);
router.get('/encargado/:id', controller.getAttendant);
router.get('/trabajadores', controller.getWorkers);
router.get('/trabajador/:id', controller.getWorker)
router.get('/maquinas', controller.getMachines);
router.get('/maquina/:id', controller.getMachine);
router.get('/revision', controller.getLastReview);
router.get('/division', controller.getDivide);
router.get('/trabajo-actual', controller.getCurrentWork);
router.get('/trabajo-actual/:id', controller.getCurrentWork);
router.get('/trabajos-secundarios', controller.getToDo);

//post
router.post('/configuracion', controller.definedAttendant);
router.post('/trabajadores', controller.addWorker);
router.post('/maquinas', controller.addMachine);
router.post('/revisar', controller.addReview);
router.post('/separar', controller.addLastDivition);
router.post('/trabajo-actual', controller.saveCurrentWork);
router.post('/trabajos-secundarios', controller.savetoDo);


//put
router.put('/encargado/:id', controller.uptadeAttendant);
router.put('/trabajador/:id', controller.updateWorker);
router.put('/maquina/:id', controller.updateActiveMachine);
router.put('/trabajos-secundarios/:id', controller.updateToDo);

//delete

router.delete('/trabajador/:id', controller.deleteWorker);
router.delete('/trabajo-actual/:id', controller.deleteCurrentWork);
router.delete('/trabajos-secundarios/:id', controller.deleteToDo);
router.delete('/maquina/:id', controller.deleteMachine);
module.exports = router;