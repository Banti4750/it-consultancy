import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscribedUsers = () => {
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  useEffect(() => {
    fetchSubscribedEmails();
  }, []);

  const fetchSubscribedEmails = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/subscribed-emails`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSubscribedEmails(response.data.subscribedEmails);
    } catch (error) {
      console.error('Error fetching subscribed emails:', error);
    }
  };

  const handleDeleteSubscribedEmail = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/subscribed-emails/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchSubscribedEmails(); // Refresh the list
    } catch (error) {
      console.error('Error deleting subscribed email:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Subscribed Email Addresses</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {subscribedEmails.length === 0 ? (
          <p className="text-gray-500">No subscribed emails found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b text-left">Email Address</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscribedEmails.map((email) => (
                  <tr key={email._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{email.email}</td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleDeleteSubscribedEmail(email._id)}
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

export default SubscribedUsers;