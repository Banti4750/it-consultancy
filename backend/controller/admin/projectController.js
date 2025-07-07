const Project = require('../../models/Project');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Multer configuration for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Make sure this uploads directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

exports.upload = multer({ storage: storage });

exports.addProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newProject = new Project({
            name,
            description,
            img: {
                data: fs.readFileSync(path.join('uploads/' + req.file.filename)),
                contentType: req.file.mimetype
            }
        });
        const savedProject = await newProject.save();
        res.status(201).json({ msg: "Project added", savedProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find(); // Fetch all project data, including image data
        const projectsWithImages = projects.map(project => ({
            ...project._doc,
            image: project.img && project.img.data ? `data:${project.img.contentType};base64,${project.img.data.toString('base64')}` : null
        }));
        res.status(200).json({ msg: "Project retrieved", projects: projectsWithImages });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        let updateData = { name, description };

        if (req.file) {
            updateData.img = {
                data: fs.readFileSync(path.join('uploads/' + req.file.filename)),
                contentType: req.file.mimetype
            };
        }

        const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ msg: "Project updated", updatedProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};