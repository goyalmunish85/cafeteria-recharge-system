var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');


var cartRouter = require('./cartRouter');
var orderRouter = require('./orderRouter');
var feedbackRouter = require('./feedbackRouter');
var itemRouter = require('./itemRouter');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.use('/cart', auth, cartRouter);
router.use('/orders',auth, orderRouter);
router.use('/feedback', feedbackRouter);
router.use('/items', itemRouter);
module.exports = router;
