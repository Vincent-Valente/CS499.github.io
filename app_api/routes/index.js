const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const bookingRouter = require('./booking');
const analyticsRouter = require('./analytics');
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
    
// Trips
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip);

router.use('/booking', bookingRouter);

router.use('/analytics', analyticsRouter);

module.exports = router;