const multer = require('multer');
const { InputFile } = require('node-appwrite/file');
const Project = require('../../models/Project');
const { storage, ID } = require('../../appwrite');

// Multer memory storage configuration
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

exports.upload = upload;

exports.addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    let imageId = null;
    let imageUrl = null;

    // Handle image upload to Appwrite
    if (req.file) {
      try {
        const fileId = ID.unique();
        const uploadedFile = await storage.createFile(
          process.env.APPWRITE_BUCKET_ID,
          fileId,
          InputFile.fromBuffer(req.file.buffer, req.file.originalname)
        );
        imageId = fileId;
        imageUrl = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${fileId}/preview`;
      } catch (uploadError) {
        console.error('Image upload failed:', uploadError);
        return res.status(500).json({ error: 'Failed to upload image' });
      }
    }

    // Create new project
    const newProject = new Project({
      name,
      description,
      imageId
    });

    const savedProject = await newProject.save();

    res.status(201).json({
      msg: "Project added successfully",
      project: {
        ...savedProject.toObject(),
        image: imageUrl
      }
    });
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    
    const projectsWithImages = await Promise.all(projects.map(async project => {
      let imageUrl = null;
      if (project.imageId) {
        try {
          imageUrl = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${project.imageId}/preview`;
        } catch (error) {
          console.error(`Error generating image URL for project ${project._id}:`, error);
        }
      }
      return {
        ...project._doc,
        image: imageUrl
      };
    }));

    res.status(200).json({
      msg: "Projects retrieved successfully",
      projects: projectsWithImages
    });
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    let updateData = { name, description };

    // Handle new image upload
    if (req.file) {
      // First, get the old project to delete old image
      const oldProject = await Project.findById(id);
      if (oldProject && oldProject.imageId) {
        try {
          await storage.deleteFile(process.env.APPWRITE_BUCKET_ID, oldProject.imageId);
        } catch (deleteError) {
          console.error(`Error deleting old image ${oldProject.imageId}:`, deleteError);
        }
      }

      // Upload new image
      try {
        const fileId = ID.unique();
        const uploadedFile = await storage.createFile(
          process.env.APPWRITE_BUCKET_ID,
          fileId,
          InputFile.fromBuffer(req.file.buffer, req.file.originalname)
        );
        updateData.imageId = fileId;
      } catch (uploadError) {
        console.error('Image upload failed during update:', uploadError);
        return res.status(500).json({ error: 'Failed to upload new image' });
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    let imageUrl = null;
    if (updatedProject.imageId) {
      imageUrl = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${updatedProject.imageId}/preview`;
    }

    res.status(200).json({
      msg: "Project updated successfully",
      project: {
        ...updatedProject.toObject(),
        image: imageUrl
      }
    });
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find project first to get imageId
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Delete image from Appwrite storage if exists
    if (project.imageId) {
      try {
        await storage.deleteFile(process.env.APPWRITE_BUCKET_ID, project.imageId);
      } catch (deleteError) {
        console.error('Error deleting image from storage:', deleteError);
        // Continue with project deletion even if image deletion fails
      }
    }

    // Delete project from database
    await Project.findByIdAndDelete(id);
    
    res.status(200).json({ msg: 'Project deleted successfully' });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).json({ error: err.message });
  }
};