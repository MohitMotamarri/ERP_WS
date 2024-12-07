import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FacultySidebar = () => {
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [studentsDropdown, setStudentsDropdown] = useState(false);
  const [ticketsDropdown, setTicketsDropdown] = useState(false);
  const [leavesDropdown, setLeavesDropdown] = useState(false);
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
                to="/faculty/view-courses"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/view-courses') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                View Courses
              </Link>
              <Link
                to="/faculty/my-courses"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/my-courses') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                My Courses
              </Link>
            </div>
          )}
        </div>

        {/* Students Dropdown */}
        <div>
          <div
            onClick={() => setStudentsDropdown(!studentsDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Students</span>
            {studentsDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {studentsDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/faculty/view-students"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/view-students') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                View Students Info
              </Link>
              <Link
                to="/faculty/update-student"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/update-student') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Update Student
              </Link>
            </div>
          )}
        </div>

        {/* Raise Ticket Dropdown */}
        <div>
          <div
            onClick={() => setTicketsDropdown(!ticketsDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Raise Ticket</span>
            {ticketsDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {ticketsDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/faculty/ticket-faculty"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/ticket-faculty') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Related to Faculty
              </Link>
              <Link
                to="/faculty/ticket-maintenance"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/ticket-maintenance') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Maintenance
              </Link>
              <Link
                to="/faculty/ticket-schedule"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/ticket-schedule') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Schedule Issue
              </Link>
            </div>
          )}
        </div>

        {/* Leaves Dropdown */}
        <div>
          <div
            onClick={() => setLeavesDropdown(!leavesDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Leaves</span>
            {leavesDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {leavesDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/faculty/leaveform"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/apply-leave') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Apply Leave
              </Link>
              <Link
                to="/faculty/applied-leaves"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/faculty/applied-leaves') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Applied Leaves
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default FacultySidebar;
