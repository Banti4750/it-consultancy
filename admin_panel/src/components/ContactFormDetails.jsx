import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactFormDetails = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContactForms();
  }, []);

  const fetchContactForms = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/contact-forms`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setContacts(response.data.contactForms);
    } catch (error) {
      console.error('Error fetching contact forms:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/contact-forms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchContactForms(); // Refresh the list
    } catch (error) {
      console.error('Error deleting contact form:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form Details</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {contacts.length === 0 ? (
          <p className="text-gray-500">No contact form submissions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Full Name</th>
                  <th className="py-3 px-4 border-b text-left">Email Address</th>
                  <th className="py-3 px-4 border-b text-left">Mobile Number</th>
                  <th className="py-3 px-4 border-b text-left">City</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{contact.fullName}</td>
                    <td className="py-3 px-4 border-b">{contact.email}</td>
                    <td className="py-3 px-4 border-b">{contact.mobileNumber}</td>
                    <td className="py-3 px-4 border-b">{contact.city}</td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleDeleteContact(contact._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactFormDetails;