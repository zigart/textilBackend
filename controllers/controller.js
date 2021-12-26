const attandantSchema = require('../models/attandant');
const workerSchema = require('../models/worker');
const reviewSchema = require('../models/review');
const divideSchema = require('../models/divide');


let controller = {
    
    //attendant
    definedAttandant: function(req,res) {
      let attandant = new attandantSchema();

      attandant.name = "Encargado";
      attandant.password = "panichella";
      attandant.save();
      res.status(200).send({
          attandant
      })
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
      
        res.status(200).send({
            worker
        });
    },
    getWorker:function (req,res){


    }


}

module.exports = controller;