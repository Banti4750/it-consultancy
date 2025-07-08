const { Admin } = require('../../db');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../../models/Client');
const Project = require('../../models/Project');
const { ContactForm , SubscribedEmail } = require('../../db');

// Admin Registration
exports.registerAdmin=  async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }   
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ email, password: hashedPassword });
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);       
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

// Admin Login
exports.loginAdmin =  async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingAdmin = await Admin.findOne({ email });
        const isPasswordValid = await bcrypt.compare(password, existingAdmin.password);
        if (!existingAdmin || !isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
       const token = jwt.sign(
            { 
                id: existingAdmin._id, // Make sure this is included
                email: existingAdmin.email,
                isAdmin: existingAdmin.isAdmin 
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
       );
        res.status(200).json({ token });                                        
        if (!existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });                               
        }
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.adminDashboard =async (req, res) => {
    try {
        const projectCount = await Project.countDocuments();
        const clientCount = await Client.countDocuments();
        const contactForm = await ContactForm.countDocuments();
        const userCount = await SubscribedEmail.countDocuments();

        res.status(200).json({
            projectCount,
            clientCount,
            contactForm,
            userCount
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}