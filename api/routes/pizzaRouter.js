const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Pizzas = require('../models/pizzas');

const pizzaRouter = express.Router();

pizzaRouter.use(bodyParser.json());

pizzaRouter.route('/')
.get((req,res,next) => {
    res.set({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    Pizzas.find({})
    .then((pizzas) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pizzas);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Pizzas.create(req.body)
    .then((pizza) => {
        console.log('Pizza Created ', pizza);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pizza);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /pizzas');
})
.delete((req, res, next) => {
    Pizzas.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

pizzaRouter.route('/:pizzaId')
.get((req,res,next) => {
    res.set({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    Pizzas.findById(req.params.pizzaId)
    .then((pizza) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pizza);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /pizzas/'+ req.params.pizzaId);
})
.put((req, res, next) => {
    Pizzas.findByIdAndUpdate(req.params.pizzaId, {
        $set: req.body
    }, { new: true })
    .then((pizza) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(pizza);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Pizzas.findByIdAndRemove(req.params.pizzaId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = pizzaRouter;