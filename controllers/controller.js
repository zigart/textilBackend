const attandantSchema = require('../models/attandant');
const workerSchema = require('../models/worker');
const machineSchema = require('../models/machines');
const reviewSchema = require('../models/review');
const divideSchema = require('../models/divide');
const worker = require('../models/worker');


let controller = {
    
    //attendant
    definedAttandant: function(req,res) {
      let attandant = new attandantSchema();

      attandant.name = "Encargado";
      attandant.password = "panichella";
      attandant.save();
      res.status(200).send({
          attandant
      });
    },

    getAttandant: function(req,res){
        attandantSchema.find({}).exec((err, attandant)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!attandant) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send({attandant});
        });
    },
    //workers

    addWorker:function (req,res){
        let worker = new workerSchema();
        let params = req.body;

        worker.name = params.name;
        worker.activeDivider = params.activeDivider;
        worker.activeReviewer = params.activeReviewer;
        worker.lastDivition = params.lastDivition;
        worker.lastReview = params.lastReview;
        
        worker.save((err, workerStored)=>{
            if (err) return res.status(500).send({ message: "error al guardar" });
            if (!workerStored)
              return res
                .status(404)
                .send({ message: "no se pudo crear el contador" });
            return res.status(200).send(workerStored);
        });
    },

    getWorker:function (req,res){    
        workerSchema.find({}).exec((err, worker)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!worker) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send(worker);
        });
    },
    //machines


    getMachines: function(req,res){
        machineSchema.find({}).exec((err, machine)=> {
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!machine) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send(machine);
        });
    },

    addMachine: function (req,res){
        let machine = new machineSchema();
        let params = req.body;

        machine.machineNumber = params.machineNumber;
        machine.avtiveMachine = params.avtiveMachine;


        machine.save((err, machineStored)=>{
            if (err) return res.status(500).send({ message: "error al guardar" });
            if (!machineStored)
              return res
                .status(404)
                .send({ message: "no se guardar la maquina" });
            return res.status(200).send(machineStored);
        });


    },

   

    //Review

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

    getLastReview: function(req,res){
        reviewSchema.find({}).exec((err,review)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!review) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send({review});
        })
    }


}

module.exports = controller;