const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Cart = require('../models/cart');
const Pizzas = require('../models/pizzas');

const cartRouter = express.Router();

cartRouter.use(bodyParser.json());

cartRouter.route('/')
.get((req,res,next) => {
    Cart.aggregate([
    { $lookup:
       {
         from: 'items',
         localField: 'i_id',
         foreignField: '_id',
         as: 'item'
       }
     },{
        $match: { u_id : mongoose.Types.ObjectId(req.payload._id)}
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
    Cart.update({u_id:mongoose.Types.ObjectId(req.payload._id), i_id:mongoose.Types.ObjectId(req.body.i_id)}, { $inc: {quantity: req.body.quantity}},{upsert:true})
    .then((item) => {
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
    Cart.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

cartRouter.route('/empty')
.delete((req, res, next) => {
    Cart.deleteMany({ u_id : mongoose.Types.ObjectId(req.payload._Id)})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


cartRouter.route('/:itemId')
.get((req,res,next) => {
    Cart.aggregate([
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
    res.end('POST operation not supported on /cart/'+ req.params.itemId);
})
.put((req, res, next) => {
    Cart.findByIdAndUpdate(req.params.itemId, {
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
    Cart.findByIdAndRemove(req.params.itemId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = cartRouter;