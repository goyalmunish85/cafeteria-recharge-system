const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Order = require('../models/orders');

const orderRouter = express.Router();

orderRouter.use(bodyParser.json());

orderRouter.route('/')
.get((req,res,next) => {
    Order.aggregate([
    { $lookup:
       {
         from: 'pizzas',
         localField: 'pizzas.p_id',
         foreignField: '_id',
         as: 'pizzaInDetail'
       }
     }
    ]).then((item) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    req.body.u_id = req.payload._id;
    console.log(req.body);
    Order.create(req.body)
    .then((item) => {
        console.log('Order Created ', item);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /cart');
})
.delete((req, res, next) => {
    Order.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

orderRouter.route('/:itemId')
.get((req,res,next) => {
    Order.aggregate([
    { $lookup:
       {
         from: 'pizzas',
         localField: 'pizzas.p_id',
         foreignField: '_id',
         as: 'pizzaInDetail'
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
    res.end('POST operation not supported on /cart/'+ req.params.itemId);
})
.put((req, res, next) => {
    Order.findByIdAndUpdate(req.params.itemId, {
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
    Order.findByIdAndRemove(req.params.itemId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});




module.exports = orderRouter;