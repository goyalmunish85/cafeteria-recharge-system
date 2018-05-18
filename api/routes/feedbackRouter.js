const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Feedback = require('../models/feedback');
const Pizzas = require('../models/pizzas');

const feedbackRouter = express.Router();

feedbackRouter.use(bodyParser.json());

feedbackRouter.route('/')
.get((req,res,next) => {
    res.set({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    Feedback.find({})
    .then((feedback) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(feedback);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    console.log(req.body);
    Feedback.create(req.body)
    .then((item) => {
        console.log('Feedback Created ', item);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /feedback');
})
.delete((req, res, next) => {
    Feedback.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

feedbackRouter.route('/:itemId')
.get((req,res,next) => {
    Feedback.aggregate([
    { $lookup:
       {
         from: 'pizzas',
         localField: 'p_id',
         foreignField: '_id',
         as: 'pizzas'
       }
     },{
        $match: { u_id : mongoose.Types.ObjectId(req.params.itemId)}
     }
    ]).then((item) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /feedback/'+ req.params.itemId);
})
.put((req, res, next) => {
    Feedback.findByIdAndUpdate(req.params.itemId, {
        $set: req.body
    }, { new: true })
    .then((item) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Feedback.findByIdAndRemove(req.params.itemId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});




module.exports = feedbackRouter;