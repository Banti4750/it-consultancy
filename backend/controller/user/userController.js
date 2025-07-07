const { ContactForm, SubscribedEmail, Project, Client } = require('../../db');

// Contact Form Submission
exports.submitContactForm = async (req, res) => {
    try {
        const { fullName, email, mobileNumber, city } = req.body;
        const newContactForm = new ContactForm({ fullName, email, mobileNumber, city });
        const savedContactForm = await newContactForm.save();
        res.status(201).json(savedContactForm);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Email Subscription
exports.subscribeEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const newSubscribedEmail = new SubscribedEmail({ email });
        const savedSubscribedEmail = await newSubscribedEmail.save();
        res.status(201).json(savedSubscribedEmail);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({msg:"Project retrive" , projects});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Clients
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json({msg:"Client retrive" , clients});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};