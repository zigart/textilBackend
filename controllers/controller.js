const attendantSchema = require('../models/attendant');
const workerSchema = require('../models/worker');
const machineSchema = require('../models/machines');
const reviewSchema = require('../models/review');
const divideSchema = require('../models/divide');
const worker = require('../models/worker');
const machine = require('../models/machines');
const currentWorkSchema = require('../models/current-work');
const currentWork = require('../models/current-work');
const toDoSchema = require('../models/todo');
const attandant = require('../models/attendant');


let controller = {
    
    //attendant

    getAttendants: function(req,res){
        attendantSchema.find({}).exec(
            (err, attendant)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!attendant) return res.status(404).send({ message: "no existe encargado" });
            return res.status(200).send(attendant);
        });
    },


    getAttendant: function (req,res){
        let attendantID = req.params.id;
        attendantSchema.findById(attendantID).exec((err,attendant)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!attendant) return res.status(404).send({ message: "no existe el trabajador" });
            return res.status(200).send(attendant); 
        });
    },

    definedAttendant: function(req,res) {
      let attendant = new attendantSchema();

      attendant.name = req.body.name;
      attendant.password = req.body.password;

      attendant.save(
        (err, attendantStored)=>{
        if (err) return res.status(500).send({ message: "error al guardar" });
        if (!attendantStored) return res.status(404).send({ message: "no se pudo guradar el encargado" });
        return res.status(200).send(attendantStored);
    });
    },

    uptadeAttendant: function(req,res){

        let attendantId = req.params.id;
        let update = req.body;

        attandant.findByIdAndUpdate(attendantId, update, 
            (err, attendantUpdated)=>{
            if(err) return res.status(500).send({message: 'error al actualizar'});
            if (!attendantUpdated) return res.status(404).send({message:'no existe el encargado a actualizar'});
            return res.status(200).send(attendantUpdated);
        })


    },

    //workers

    getWorkers:function (req,res){    
        workerSchema.find({}).exec(
            (err, worker)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!worker) return res.status(404).send({ message: "no existen trabajadoreso" });
            return res.status(200).send(worker);
        });
    },

    getWorker:function name(req, res) {
        let workerID = req.params.id;
        worker.findById(workerID).exec((err,worker)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!worker) return res.status(404).send({ message: "no existe el trabajador" });
            return res.status(200).send(worker); 
        });
    },

    addWorker:function (req,res){
        let worker = new workerSchema();
        let params = req.body;

        worker.name = params.name;
        worker.activeDivider = params.activeDivider;
        worker.activeReviewer = params.activeReviewer;
        worker.lastDivition = params.lastDivition;
        worker.lastReview = params.lastReview;
        worker.password = params.password;
        
        worker.save(
            (err, workerStored)=>{
            if (err) return res.status(500).send({ message: "error al guardar" });
            if (!workerStored) return res.status(404).send({ message: "no se pudo guradar el trabajador" });
            return res.status(200).send(workerStored);
        });
    },

    updateWorker: function (req,res) {
        let workerId = req.params.id;
        let update = req.body;

        worker.findByIdAndUpdate(workerId, update, 
            (err, workerUpdated)=>{
            if(err) return res.status(500).send({message: 'error al actualizar'});
            if (!workerUpdated) return res.status(404).send({message:'no existe el trabajador a actualizar'});
            return res.status(200).send(workerUpdated);
        })
    },

    deleteWorker: function(req,res){
        let workerID = req.params.id;

        worker.findByIdAndDelete(workerID).exec((err, workerDeleted)=>{
            if(err) return res.status(500).send({message:'error al eliminar'});
            if(!workerDeleted) return res.status(404).send({message: 'trabajador no encontrado'});
            return res.status(200).send(workerDeleted);
        })
    },

    //machines


    getMachines: function(req, res){
        machineSchema.find({}).exec((err, machine)=> {
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!machine) return res.status(404).send({ message: "no se encontraron maquinas" });
            return res.status(200).send(machine);
        });
    },

    getMachine:function(req, res) {
        let machineID = req.params.id;
        machine.findById(machineID).exec((err,machineID)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!machineID) return res.status(404).send({ message: "no existe la maquina" });
            return res.status(200).send(machineID); 
        });
    },

    addMachine: function (req, res){
        let machine = new machineSchema();
        let params = req.body;

        machine.machineName = params.machineName;
        machine.activeMachine = params.activeMachine;
        machine.lastReview =  params.lastReview;
        machine.lastDivition = params.lastDivition;


        machine.save((err, machineStored)=>{
            if (err) return res.status(500).send({ message: "error al agregar la maquina" });
            if (!machineStored)return res.status(404).send({ message: "no se guardar la maquina" });
            return res.status(200).send(machineStored);
        });


    },
    
    updateActiveMachine: function(req, res) {
        let machineID = req.params.id;
        let update = req.body;

    machine.findByIdAndUpdate(machineID, update, {new: true}, (err, machineID)=>{
        if(err) return res.status(500).send({message: 'error al actualizar'});
        if (!machineID) return res.status(404).send({message:'no existe la maquina a actualizar'});
        return res.status(200).send(machineID);
    });
  },

  deleteMachine: function(req, res){
    let machineID = req.params.id;
    machine.findByIdAndDelete(machineID).exec((err, machine)=>{
        if(err) return res.status(500).send({message: "error al eliminar la maquina"});
        if(!machine) return res.status(404).send({message: "no se encontro la maquina"});
        return res.status(200).send(machine);
    })
    
  },
    
    
    //Review

    getLastReview: function(req,res){
        reviewSchema.find({}).exec((err,review)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!review) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send(review);
        });
    },

    addReview:function(req,res) {
        let review = new reviewSchema();
        let params = req.body;
        review.worker = params.worker;
        review.machine = params.machine;
        review.status = params.status;
        review.date = params.date;
        if(params.problems !== ''){
            review.problems = params.problems;
        }
        
        review.save((err, reviewStored)=>{
            if (err) return res.status(500).send({ message: "error al guardar la revision" });
            if (!reviewStored)return res.status(404).send({ message: "no se pudo guardar la revision" });
            return res.status(200).send(reviewStored);
        });
    },


    //divide

    addLastDivition:function(req,res) {
        let divide = new divideSchema();
        let params = req.body;
        divide.worker = params.worker;
        divide.machine = params.machine;
        divide.date = params.date;
        divide.colth = params.colth;
        divide.failed = params.failed;
        
        divide.save((err, divideStored)=>{
            if (err) return res.status(500).send({ message: "error al guardar la revision" });
            if (!divideStored)return res.status(404).send({ message: "no se pudo guardar la revision" });
            return res.status(200).send(divideStored);
        });
    },

    //current work

    saveCurrentWork:function(req,res){
        let currentWork =  new currentWorkSchema();
        let params = req.body;
        
        currentWork._id = params._id;
        currentWork.work = params.work;
        currentWork.machine = params.machine;

        currentWork.save((err, currentWorkStored)=>{
            if(err) return res.status(500).send({message:"error al guardar el trabajo actual"});
            if(!currentWorkStored) return res.status(404).send({message: "no se encontro un trabajo actual"});
            return res.status(200).send(currentWorkStored);
        });
    },

    getCurrentWorks:function(req,res){
        currentWork.find({}).exec((err,currentWork)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!currentWork) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send(currentWork);
        });
    },

    getCurrentWork:function(req, res) {
        let workID =  req.params.id;

        currentWork.findById(workID).exec((err,work)=>{
            if (err) return res.status(500).send({ message: "error al devolver el trabajo" });
            if (!work) return res.status(404).send();
            return res.status(200).send(work); 
        });
    },

    deleteCurrentWork: function (req, res) {
        let workID = req.params.id;

        currentWork.findByIdAndDelete(workID).exec((err, work)=>{
            if (err) return res.status(500).send({ message: "error al devolver el trabajo" });
            if (!work) return res.status(404).send({message : "no hay trabajo que borrar"});
            return res.status(200).send(work); 
        })
    },

    //toDo - smallJobs


    getToDo:function(req, res){
        toDoSchema.find({}).exec((err,toDoStored)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!toDoStored) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send(toDoStored);
        });
    },


    savetoDo: function(req,res){

       let toDo = new toDoSchema();
       let params = req.body;
       toDo.toDo = params.toDo;
       toDo.done = params.done;

       
       toDo.save((err, toDoStored)=>{
        if (err) return res.status(500).send({ message: "error al agregar el trabajo" });
        if (!toDoStored)return res.status(404).send({ message: "no existe el trabajo a agregar" });
        return res.status(200).send(toDoStored);
    });
    },

    deleteToDo: function(req,res){
        
    
        let todo = req.params.id;
        
        toDoSchema.findByIdAndDelete(todo).exec((err, toDoStored)=>{
            if (err) return res.status(500).send({ message: "error al devolver el trabajo" });
            if (!toDoStored) return res.status(404).send(params);
            return res.status(200).send(toDoStored); 
        })
    },

    updateToDo:function(req,res){
        let jobID = req.params.id;
        let update = req.body;
        toDoSchema.findByIdAndUpdate(jobID, update, 
            (err, jobUpdated)=>{
            if(err) return res.status(500).send({message: 'error al actualizar'});
            if (!jobUpdated) return res.status(404).send({message:'no existe el trabajador a actualizar'});
            return res.status(200).send(jobUpdated);
        })
    }


}

module.exports = controller;