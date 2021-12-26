const attandantSchema = require('../models/attandant');
const workerSchema = require('../models/worker');
const reviewSchema = require('../models/review');
const divideSchema = require('../models/divide');
const review = require('../models/review');


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
        
        worker.save();
        res.status(200).send({
            worker
        });
    },
    getWorker:function (req,res){
        
        workerSchema.find({}).exec((err, worker)=>{
            if (err) return res.status(500).send({ message: "error al devolver los datos" });
            if (!worker) return res.status(404).send({ message: "no existe el proyecto" });
            return res.status(200).send({worker});
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