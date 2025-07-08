const express = require('express');
const router = express.Router();
const adminAuth = require('../auth/adminAuth');
const projectController = require('../controller/admin/projectController');
const clientController = require('../controller/admin/clientController');
const { upload } = require('../controller/admin/clientController');
const userContactController = require('../controller/admin/usercontactController');
const userSubscribedEmailController = require('../controller/admin/userSubscribedEmailController');
const adminAuthController = require('../controller/admin/adminAuthController');
const { Admin } = require('../db');


// Admin Authentication Routes
router.post('/register', adminAuthController.registerAdmin);
router.post('/login', adminAuthController.loginAdmin);

//Test middlware
router.get('/protected', adminAuth,async (req, res) => {
    
    res.json({ 
        message: 'Protected route accessed successfully',
        admin:req.user
    });
});


// Project Management Routes
router.post('/projects', adminAuth, upload.single('image'), projectController.addProject);
router.get('/projects', adminAuth, projectController.getProjects);
router.put('/projects/:id', adminAuth, upload.single('image'), projectController.updateProject);
router.delete('/projects/:id', adminAuth, projectController.deleteProject);

// Client Management Routes
router.post('/clients', adminAuth, upload.single('image'), clientController.addClient);
router.get('/clients', adminAuth, clientController.getClients);
router.put('/clients/:id', adminAuth, upload.single('image'), clientController.updateClient);
router.delete('/clients/:id', adminAuth, clientController.deleteClient);

// Contact Form Routes
router.get('/contact-forms', adminAuth, userContactController.getContactForms);
router.delete('/contact-forms/:id', adminAuth, userContactController.deleteContactForm);

// Subscribed Email Routes
router.get('/subscribed-emails', adminAuth, userSubscribedEmailController.getSubscribedEmails);
router.delete('/subscribed-emails/:id', adminAuth, userSubscribedEmailController.deleteSubscribedEmail);

//dashboard
router.get('/dashboard', adminAuth, adminAuthController.adminDashboard)

module.exports = router;