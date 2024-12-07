import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const StudentSidebar = () => {
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [feedbackDropdown, setFeedbackDropdown] = useState(false);
  const location = useLocation();

  // Check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full shadow-md pt-16 overflow-y-auto"
      style={{ zIndex: 50 }} // Ensures it stays on top of other elements
    >
      <nav className="space-y-2 p-4">
        {/* Courses Dropdown */}
        <div>
          <div
            onClick={() => setCoursesDropdown(!coursesDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Courses</span>
            {coursesDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {coursesDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/student/view-courses"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/student/view-courses') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                View Courses
              </Link>
              <Link
                to="/student/register-courses"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/student/register-courses') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Register Courses
              </Link>
            </div>
          )}
        </div>

        {/* Feedback Dropdown */}
        <div>
          <div
            onClick={() => setFeedbackDropdown(!feedbackDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Feedback</span>
            {feedbackDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {feedbackDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/student/feedback"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/student/feedback') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Give Feedback
              </Link>
            </div>
          )}
        </div>

        {/* Complaints */}
        <div>
          <Link
            to="/student/complaints"
            className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
              isActive('/student/complaints') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            Complaints
          </Link>
        </div>

        {/* Profile */}
        <div>
          <Link
            to="/student/profile"
            className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
              isActive('/student/profile') ? 'bg-blue-600 text-white' : ''
            }`}
          >
            Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default StudentSidebar;
