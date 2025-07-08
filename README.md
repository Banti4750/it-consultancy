# IT_C Project

This repository contains a full-stack application consisting of an Admin Panel, a Backend API, and a Landing Page.

## Project Structure

- `admin_panel/`: React-based administrative interface for managing projects, clients, and other data.
- `backend/`: Node.js/Express.js API with MongoDB for data storage and Appwrite for file storage.
- `landing_page/`: React-based public-facing website.

## Setup and Installation

To set up and run the project locally, follow these steps:

### 1. Backend Setup

Navigate to the `backend` directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory with the following environment variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_API_KEY=your_appwrite_api_key
APPWRITE_BUCKET_ID=your_appwrite_bucket_id
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:3000`.

### 2. Admin Panel Setup

Navigate to the `admin_panel` directory:

```bash
cd ../admin_panel
```

Install dependencies:

```bash
npm install
```

Start the admin panel:

```bash
npm run dev
```

The admin panel will typically run on `http://localhost:3001` or another available port.

### 3. Landing Page Setup

Navigate to the `landing_page` directory:

```bash
cd ../landing_page
```

Install dependencies:

```bash
npm install
```

Start the landing page:

```bash
npm run dev
```

The landing page will typically run on `http://localhost:3003` or another available port.

## Features

### Backend
- RESTful API for managing projects, clients, contact forms, and email subscriptions.
- Image upload and management using Appwrite storage.
- MongoDB for data persistence.

### Admin Panel
- CRUD operations for projects and clients.
- Image upload for projects and clients.

### Landing Page
- Displays dynamic project and client data fetched from the backend.
- Contact form submission.
- Email subscription.

## API Endpoints (Backend)

- `GET /api/projects`: Get all projects.
- `GET /api/clients`: Get all clients.
- `POST /api/contact-form`: Submit a contact form.
- `POST /api/subscribe-email`: Subscribe an email.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.