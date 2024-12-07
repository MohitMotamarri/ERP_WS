import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
import StudentTopBar from './StudentTopBar';

const StudentLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // ID verification logic
    const storedId = localStorage.getItem('id');
    if (!storedId) {
      navigate('/login'); // Redirect to the login page if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <StudentSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 flex flex-col">
        {/* TopBar */}
        <div className="fixed w-full z-10">
          <StudentTopBar username={localStorage.getItem('username') || 'Student'} />
        </div>

        {/* Main Content */}
        <div className="pt-16 p-6 flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
