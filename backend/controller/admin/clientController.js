const multer = require('multer');
const Client = require('../../models/Client');
const { storage, ID } = require('../../appwrite');
const Appwrite = require('node-appwrite');
const { InputFile } = require('node-appwrite/file');

// Initialize Appwrite client
const client = new Appwrite.Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
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

// Helper function to get image URL
const getImageUrl = (imageId) => {
  if (!imageId) return null;
  return `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${imageId}/preview`;
};

exports.addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    
    // Validate required fields
    if (!name || !description || !designation) {
      return res.status(400).json({ error: 'Name, description, and designation are required' });
    }

    let imageId = null;

    // Handle file upload if present
    if (req.file) {
      try {
        const fileId = ID.unique();
        
        // Upload file to Appwrite storage
        const file = await storage.createFile(
          process.env.APPWRITE_BUCKET_ID,
          fileId,
          InputFile.fromBuffer(req.file.buffer, req.file.originalname)
        );
        
        imageId = file.$id;
        console.log('File uploaded successfully:', file.$id);
      } catch (uploadError) {
        console.error('Image upload failed:', uploadError);
        return res.status(500).json({ error: 'Failed to upload image: ' + uploadError.message });
      }
    }

    // Create new client
    const newClient = new Client({
      name,
      description,
      designation,
      imageId
    });

    const savedClient = await newClient.save();
    
    // Return response with image URL
    res.status(201).json({ 
      msg: "Client added successfully",
      client: {
        ...savedClient.toObject(),
        image: getImageUrl(savedClient.imageId)
      }
    });
  } catch (err) {
    console.error('Error adding client:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().lean();
    
    // Add image URLs to clients
    const clientsWithImages = clients.map(client => ({
      ...client,
      image: getImageUrl(client.imageId)
    }));
    
    res.status(200).json({ 
      msg: "Clients retrieved successfully",
      clients: clientsWithImages 
    });
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, designation } = req.body;
    
    // Check if client exists
    const existingClient = await Client.findById(id);
    if (!existingClient) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (designation !== undefined) updateData.designation = designation;

    // Handle new image upload
    if (req.file) {
      // Delete old image if exists
      if (existingClient.imageId) {
        try {
          await storage.deleteFile(process.env.APPWRITE_BUCKET_ID, existingClient.imageId);
          console.log('Old image deleted successfully');
        } catch (deleteError) {
          console.error('Error deleting old image:', deleteError);
          // Continue with update even if old image deletion fails
        }
      }

      // Upload new image
      try {
        const fileId = ID.unique();
        const file = await storage.createFile(
          process.env.APPWRITE_BUCKET_ID,
          fileId,
          InputFile.fromBuffer(req.file.buffer, req.file.originalname)
        );
        updateData.imageId = file.$id;
        console.log('New image uploaded successfully:', file.$id);
      } catch (uploadError) {
        console.error('Image upload failed during update:', uploadError);
        return res.status(500).json({ error: 'Failed to upload new image: ' + uploadError.message });
      }
    }

    const updatedClient = await Client.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({ 
      msg: "Client updated successfully",
      client: {
        ...updatedClient.toObject(),
        image: getImageUrl(updatedClient.imageId)
      }
    });
  } catch (err) {
    console.error('Error updating client:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find client first to get imageId
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    // Delete image from storage if exists
    if (client.imageId) {
      try {
        await storage.deleteFile(process.env.APPWRITE_BUCKET_ID, client.imageId);
        console.log('Image deleted successfully from storage');
      } catch (deleteError) {
        console.error('Error deleting image from storage:', deleteError);
        // Continue with client deletion even if image deletion fails
      }
    }

    // Delete client from database
    await Client.findByIdAndDelete(id);
    
    res.status(200).json({ 
      msg: 'Client deleted successfully' 
    });
  } catch (err) {
    console.error('Error deleting client:', err);
    res.status(500).json({ error: err.message });
  }
};