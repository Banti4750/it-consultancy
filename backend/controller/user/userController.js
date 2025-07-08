const { ContactForm, SubscribedEmail} = require('../../db');
const Project = require('../../models/Project');
const Client = require('../../models/Client');

// Contact Form Submission

const getImageUrl = (imageId) => {
  if (!imageId) return null;
  return `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${imageId}/view`;
};
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
// exports.getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find();
//         res.status(200).json({msg:"Project retrive" , projects});
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

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



// Get All Clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().lean();
    
    // Add image URLs to clients
    const clientsWithImages = clients.map(client => ({
      ...client,
      image: getImageUrl(client.imageId)
    }));
    
    res.status(200).json({ 
     msg:"Client retrive",
      clients: clientsWithImages 
    });
  } catch (err) {
    console.error('Error fetching clients:', err);
    res.status(500).json({ error: err.message });
  }
};