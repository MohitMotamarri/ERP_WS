import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FacultySidebar from './FacultySideBar';
import FacultyTopBar from './FacultyTopBar';

const FacultyLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Username verification logic
    const storedUsername = localStorage.getItem('id');
    if (!storedUsername) {
      navigate('/login'); // Redirect to the login page if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <FacultySidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 flex flex-col">
        {/* TopBar */}
        <div className="fixed w-full z-10">
          <FacultyTopBar username={localStorage.getItem('username') || 'Faculty'} />
        </div>

        {/* Main Content */}
        <div className="pt-16 p-6 flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FacultyLayout;
