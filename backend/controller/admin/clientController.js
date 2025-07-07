const Client = require('../../models/Client');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Make sure this 'uploads' directory exists
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage });

exports.addClient = async (req, res) => {
    try {
        const { name, description, designation } = req.body;
        let newClientData = { name, description, designation };

        if (req.file) {
            newClientData.img = {
                data: fs.readFileSync(path.join(__dirname, '../../uploads/', req.file.filename)),
                contentType: req.file.mimetype
            };
        }

        const newClient = new Client(newClientData);
        const savedClient = await newClient.save();
        res.status(201).json({ msg:"Client Added" , savedClient});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        const clientsWithImages = clients.map(client => ({
            ...client._doc,
            image: client.img && client.img.data ? `data:${client.img.contentType};base64,${client.img.data.toString('base64')}` : null
        }));
        res.status(200).json({ msg:"Client retrive" , clients: clientsWithImages});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Create update object with available fields
        const updateData = {};
        if (req.body.name) updateData.name = req.body.name;
        if (req.body.description) updateData.description = req.body.description;
        if (req.body.designation) updateData.designation = req.body.designation;

        if (req.file) {
            updateData.img = {
                data: fs.readFileSync(path.join(__dirname, '../../uploads/', req.file.filename)),
                contentType: req.file.mimetype
            };
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ error: "No valid fields to update" });
        }

        const updatedClient = await Client.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ msg: "Client updated", updatedClient });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        await Client.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Client deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};