import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectManagement from './components/ProjectManagement';
import ClientManagement from './components/ClientManagement';
import ContactFormDetails from './components/ContactFormDetails';
import SubscribedUsers from './components/SubscribedUsers';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './index.css';

// A wrapper component to protect admin routes
const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('adminToken');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Layout for admin panel (Sidebar + Main)
const AdminLayout = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar: Fixed width, full height */}
      <div className="w-64 bg-white border-r shadow-md h-full fixed top-0 left-0 z-10">
        <Sidebar />
      </div>

      {/* Main content: margin-left equal to sidebar width */}
      <div className="ml-64 flex-1 overflow-auto p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<ProjectManagement />} />
            <Route path="clients" element={<ClientManagement />} />
            <Route path="contact-forms" element={<ContactFormDetails />} />
            <Route path="subscribed-users" element={<SubscribedUsers />} />
          </Route>
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
