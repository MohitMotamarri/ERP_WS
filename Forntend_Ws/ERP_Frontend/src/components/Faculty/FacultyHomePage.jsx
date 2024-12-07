import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FacultySidebar from './FacultySideBar';
import FacultyTopBar from './FacultyTopBar';

const FacultyHomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('id') || 'Faculty';

  useEffect(() => {
    // Check if the username exists in localStorage
    const storedUsername = localStorage.getItem('id');
    if (!storedUsername) {
      navigate('/login'); // Redirect to the login page if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200">
        <FacultySidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100">
        {/* TopBar */}
        <div className="fixed w-full z-10">
          <FacultyTopBar username={username} />
        </div>

        {/* Main Content */}
        <div className="pt-16 p-6">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Faculty Dashboard</h2>
          <p className="text-gray-700">
            This is your faculty landing page. Use the sidebar to navigate through various sections of the faculty portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyHomePage;
