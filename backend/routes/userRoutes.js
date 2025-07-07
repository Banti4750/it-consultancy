const express = require('express');
const router = express.Router();
const userController = require('../controller/user/userController');

// Contact Form Routes
router.post('/contact-form', userController.submitContactForm);

// Email Subscription Routes
router.post('/subscribe-email', userController.subscribeEmail);

// Get All Projects
router.get('/projects', userController.getProjects);

// Get All Clients
router.get('/clients', userController.getClients);

module.exports = router;