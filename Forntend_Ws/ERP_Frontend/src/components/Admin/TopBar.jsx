import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-blue-600 text-white flex justify-center items-center p-6 shadow-md">
      {/* Portal Name */}
      <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
        Admin Portal
      </h1>

      {/* User Info and Logout */}
      <div className="absolute right-4 flex items-center space-x-4">
        <span className="text-white font-medium">
          Welcome, {username || 'Admin'}
        </span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
