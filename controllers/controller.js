const attandantSchema = require('../models/attandant');
const workerSchema = require('../models/worker');
const machineSchema = require('../models/machines');
const reviewSchema = require('../models/review');
const divideSchema = require('../models/divide');
const worker = require('../models/worker');
const machine = require('../models/machines');
const moment = require('moment');


let controller = {
    
    //attendant
    getAttandant: function(req,res){
        attandantSchema.find({}).exec(
            (err, attandant)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!attandant) return res.status(404).send({ message: "no existe encargado" });
            return res.status(200).send(attandant);
        });
    },

    definedAttandant: function(req,res) {
      let attandant = new attandantSchema();

      attandant.name = "Encargado";
      attandant.password = "panichella";

      attandant.save();
      res.status(200).send({
          attandant
      });
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

        machine.machineNumber = params.machineNumber;
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
    
    
    //Review

    getLastReview: function(req,res){
        reviewSchema.find({}).exec((err,review)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!review) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send({review});
        });
    },

    addLastReview:function(req,res) {
        let review = new reviewSchema();
        let params = req.body;

        review.worker = params.worker;
        review.date = params.date;
        review.colth = params.colth;
        review.failed = params.failed;

        review.save();

        res.status(200).send({
            review
        });
    },



}

module.exports = controller;