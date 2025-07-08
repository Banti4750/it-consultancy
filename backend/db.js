const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};


//Admin 
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
     isAdmin: {
        type: Boolean,
        default: true
    }
})
const Admin = mongoose.model('Admin', adminSchema);

// Contact Form Schema
const contactFormSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

// Subscribed Email Schema
const subscribedEmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const SubscribedEmail = mongoose.model('SubscribedEmail', subscribedEmailSchema);

module.exports = { connectDB, Admin , ContactForm, SubscribedEmail };