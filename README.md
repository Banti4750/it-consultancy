# 🚀 IT_C Project

> A comprehensive full-stack application featuring an admin panel, backend API, and landing page for managing and showcasing IT projects and clients.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

## 🌐 Live Demo

| Component | URL | Credentials |
|-----------|-----|-------------|
| 🔧 Backend API | [https://it-consultancy.onrender.com](https://it-consultancy.onrender.com) | - |
| 🎯 Landing Page | [https://it-consultancy-ivory.vercel.app/](https://it-consultancy-ivory.vercel.app/) | - |
| 🎛️ Admin Panel | [https://it-consultancy-ykop-admin-panel.vercel.app/login](https://it-consultancy-ykop-admin-panel.vercel.app/login) | Email: `admin1@gmila.com`<br>Password: `Admin@123` |

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🌟 Overview

IT_C Project is a modern full-stack application designed to streamline project management and client showcasing for IT companies. It provides a powerful admin interface for content management, a robust backend API for data handling, and an engaging landing page for public presentation.

### Key Highlights

- **🎛️ Admin Panel**: Intuitive React-based interface for managing projects and clients
- **🔧 Backend API**: Scalable Node.js/Express.js server with MongoDB integration
- **🌐 Landing Page**: Responsive React frontend for public engagement
- **📁 File Management**: Integrated Appwrite storage for media handling
- **⚡ Real-time Updates**: Dynamic content management system

## ✨ Features

### 🔧 Backend Features
- **RESTful API Architecture**: Clean, organized endpoints following REST principles
- **Database Integration**: MongoDB with Mongoose ODM for robust data modeling
- **File Storage**: Appwrite integration for secure image upload and management
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Handling**: Centralized error handling with meaningful responses
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Environment Configuration**: Secure environment variable management

### 🎛️ Admin Panel Features
- **Dashboard Overview**: Comprehensive statistics and quick access to key functions
- **Project Management**: 
  - Create, read, update, and delete projects
  - Image gallery management
  - Project categorization and tagging
  - Status tracking and timeline management
- **Client Management**:
  - Client portfolio management
  - Contact information handling
  - Client logo and media uploads
- **Content Management**:
  - Dynamic content editing
  - SEO optimization tools
  - Media library management
- **User Authentication**: Secure admin access control
- **Responsive Design**: Mobile-friendly administrative interface

### 🌐 Landing Page Features
- **Dynamic Content Display**: Real-time project and client showcasing
- **Contact Form**: Integrated contact form with backend submission
- **Email Subscription**: Newsletter subscription functionality
- **Responsive Design**: Mobile-first, responsive layout
- **SEO Optimized**: Search engine friendly structure
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **File Storage**: Appwrite
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi or express-validator
- **Environment**: dotenv

### Frontend (Admin Panel & Landing Page)
- **Framework**: React.js (v18+)
- **Build Tool**: Vite or Create React App
- **Styling**: CSS3, Styled Components, or Tailwind CSS
- **State Management**: React Hooks, Context API, or Redux
- **HTTP Client**: Axios
- **Routing**: React Router DOM

### Development Tools
- **Package Manager**: npm or yarn
- **Version Control**: Git
- **Code Formatting**: Prettier
- **Linting**: ESLint
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
IT_C_Project/
├── 📁 backend/
│   ├── 📁 controllers/      # Request handlers
│   ├── 📁 models/          # Database models
│   ├── 📁 routes/          # API routes
│   ├── 📁 middleware/      # Custom middleware
│   ├── 📁 utils/           # Utility functions
│   ├── 📁 config/          # Configuration files
│   ├── 📄 server.js        # Main server file
│   ├── 📄 package.json     # Dependencies
│   └── 📄 .env.example     # Environment variables template
├── 📁 admin_panel/
│   ├── 📁 src/
│   │   ├── 📁 components/  # Reusable components
│   │   ├── 📁 pages/       # Page components
│   │   ├── 📁 services/    # API services
│   │   ├── 📁 utils/       # Utility functions
│   │   ├── 📁 assets/      # Static assets
│   │   └── 📄 App.js       # Main app component
│   ├── 📄 package.json     # Dependencies
│   └── 📄 .env.example     # Environment variables template
├── 📁 landing_page/
│   ├── 📁 src/
│   │   ├── 📁 components/  # Reusable components
│   │   ├── 📁 pages/       # Page components
│   │   ├── 📁 services/    # API services
│   │   ├── 📁 assets/      # Static assets
│   │   └── 📄 App.js       # Main app component
│   ├── 📄 package.json     # Dependencies
│   └── 📄 .env.example     # Environment variables template
├── 📄 README.md
├── 📄 .gitignore
└── 📄 docker-compose.yml   # Optional: Docker setup
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/IT_C_Project.git
cd IT_C_Project

# Install and run backend
cd backend
npm install
npm run dev

# Install and run admin panel (new terminal)
cd ../admin_panel
npm install
npm run dev

# Install and run landing page (new terminal)
cd ../landing_page
npm install
npm run dev
```

## 💻 Installation

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**
- **MongoDB** (v4.4 or higher)
- **Appwrite** account for file storage

### Step-by-Step Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/IT_C_Project.git
cd IT_C_Project
```

#### 2. Backend Setup
```bash
cd backend
npm install
```

Create environment file:
```bash
cp .env.example .env
```

#### 3. Admin Panel Setup
```bash
cd ../admin_panel
npm install
```

Create environment file:
```bash
cp .env.example .env
```

#### 4. Landing Page Setup
```bash
cd ../landing_page
npm install
```

Create environment file:
```bash
cp .env.example .env
```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/itc_project

# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/itc_project

# Appwrite Configuration
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key
APPWRITE_BUCKET_ID=your_bucket_id

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3001,http://localhost:3003
```

### Frontend Environment Variables

#### Admin Panel (`.env` in `admin_panel` directory):
```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
REACT_APP_APPWRITE_PROJECT_ID=your_project_id
```

#### Landing Page (`.env` in `landing_page` directory):
```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_SITE_NAME=IT_C Project
REACT_APP_CONTACT_EMAIL=contact@itcproject.com
```

## 🎯 Usage

### Starting the Development Environment

1. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

2. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:3000`

3. **Start the Admin Panel**:
   ```bash
   cd admin_panel
   npm run dev
   ```
   Admin panel will run on `http://localhost:3001`

4. **Start the Landing Page**:
   ```bash
   cd landing_page
   npm run dev
   ```
   Landing page will run on `http://localhost:3003`

### Access Points

- **Backend API**: `http://localhost:3000`
- **Admin Panel**: `http://localhost:3001`
- **Landing Page**: `http://localhost:3003`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication
Most endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project (Auth required)
- `PUT /api/projects/:id` - Update project (Auth required)
- `DELETE /api/projects/:id` - Delete project (Auth required)

#### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get client by ID
- `POST /api/clients` - Create new client (Auth required)
- `PUT /api/clients/:id` - Update client (Auth required)
- `DELETE /api/clients/:id` - Delete client (Auth required)

#### Contact & Subscription
- `POST /api/contact-form` - Submit contact form
- `POST /api/subscribe-email` - Subscribe to newsletter
- `GET /api/subscriptions` - Get all subscriptions (Auth required)

#### File Upload
- `POST /api/upload` - Upload file to Appwrite storage (Auth required)
- `DELETE /api/upload/:fileId` - Delete file from storage (Auth required)

#### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new admin (Auth required)
- `GET /api/auth/profile` - Get current user profile (Auth required)

### Request/Response Examples

#### Create Project
```bash
POST /api/projects
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "title": "E-commerce Platform",
  "description": "Modern e-commerce solution",
  "technologies": ["React", "Node.js", "MongoDB"],
  "status": "completed",
  "client": "Tech Corp",
  "images": ["image1.jpg", "image2.jpg"]
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "E-commerce Platform",
    "description": "Modern e-commerce solution",
    "technologies": ["React", "Node.js", "MongoDB"],
    "status": "completed",
    "client": "Tech Corp",
    "images": ["image1.jpg", "image2.jpg"],
    "createdAt": "2023-07-21T10:30:00.000Z",
    "updatedAt": "2023-07-21T10:30:00.000Z"
  }
}
```

## 🚀 Deployment

### Backend Deployment (Render/Heroku)

1. **Render Deployment**:
   - Connect your GitHub repository
   - Set environment variables in Render dashboard
   - Deploy from the `backend` directory

2. **Heroku Deployment**:
   ```bash
   # Install Heroku CLI
   npm install -g heroku

   # Login to Heroku
   heroku login

   # Create new app
   heroku create your-app-name

   # Set environment variables
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret

   # Deploy
   git push heroku main
   ```

### Frontend Deployment (Vercel/Netlify)

1. **Vercel Deployment**:
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   vercel --prod
   ```

2. **Netlify Deployment**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Configure environment variables

### Environment Variables for Production

Make sure to update your environment variables for production:
- Set `NODE_ENV=production`
- Use production database URLs
- Update CORS origins
- Use secure JWT secrets

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues

#### Database Connection Error
```bash
# Make sure MongoDB is running
mongod

# Check connection string in .env file
MONGODB_URI=mongodb://localhost:27017/itc_project
```

#### Port Already in Use
```bash
# Kill process using the port
kill -9 $(lsof -ti:3000)

# Or use a different port
PORT=3001 npm run dev
```

#### Appwrite Configuration
Make sure your Appwrite project is properly configured:
- Project ID is correct
- API key has necessary permissions
- Bucket ID exists and is accessible

### Contact

- **Email**: bantikumar6203818460@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 📊 Project Statistics

- **Total Lines of Code**: 10,000+
- **Languages**: JavaScript, HTML, CSS
- **Components**: 50+ React components
- **API Endpoints**: 20+ REST endpoints
- **Database Collections**: 5+ MongoDB collections

## 🎉 Acknowledgments

- Thanks to all contributors who made this project possible
- Special thanks to the open-source community
- Inspiration from modern web development practices

---

<div align="center">
  <strong>Made with ❤️ by the IT_C Team</strong>
</div>

<div align="center">
  <a href="#-itc-project">⬆️ Back to Top</a>
</div>
