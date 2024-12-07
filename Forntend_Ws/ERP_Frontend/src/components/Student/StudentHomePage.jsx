import React, { useEffect } from 'react';
import StudentLayout from './StudentLayout'; // Import the StudentLayout component

const StudentHomePage = () => {
  useEffect(() => {
    // Check if the username exists in localStorage
    const storedUsername = localStorage.getItem('id');
    if (!storedUsername) {
      window.location.href = '/login'; // Redirect to the login page if not authenticated
    }
  }, []);

  return (
    <StudentLayout>
      {/* Main Content */}
      <div className="pt-16 p-6 flex-grow overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Student Dashboard</h2>
        <p className="text-gray-700">
          This is your student landing page. Use the sidebar to navigate through various sections of the student portal.
        </p>
      </div>
    </StudentLayout>
  );
};

export default StudentHomePage;
