// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, ChevronRight } from 'lucide-react';

// const AdminSidebar = () => {
//   const [studentDropdown, setStudentDropdown] = useState(false);
//   const [facultyDropdown, setFacultyDropdown] = useState(false);
//   const location = useLocation();

//   // Check if the current route is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div
//       className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full shadow-md pt-16 overflow-y-auto"
//       style={{ zIndex: 50 }} // Ensures it stays on top of other elements
//     >
//       <nav className="space-y-2 p-4">
//         {/* Students Dropdown */}
//         <div>
//           <div
//             onClick={() => setStudentDropdown(!studentDropdown)}
//             className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
//           >
//             <span>Students</span>
//             {studentDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//           </div>
//           {studentDropdown && (
//             <div className="pl-4 space-y-2 mt-2">
//               <Link
//                 to="/admin/view-students"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/view-students') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 View Students
//               </Link>
//               <Link
//                 to="/admin/add-student"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/add-student') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 Add Student
//               </Link>
//               <Link
//                 to="/admin/update-student"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/update-student') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 Update Student
//               </Link>
//               <Link
//                 to="/admin/remove-student"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/remove-student') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 Remove Student
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Faculty Dropdown */}
//         <div>
//           <div
//             onClick={() => setFacultyDropdown(!facultyDropdown)}
//             className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
//           >
//             <span>Faculty</span>
//             {facultyDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
//           </div>
//           {facultyDropdown && (
//             <div className="pl-4 space-y-2 mt-2">
//               <Link
//                 to="/admin/view-faculty"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/view-faculty') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 View Faculty
//               </Link>
//               <Link
//                 to="/admin/add-faculty"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/add-faculty') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 Add Faculty
//               </Link>
//               <Link
//                 to="/admin/remove-faculty"
//                 className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
//                   isActive('/admin/remove-faculty') ? 'bg-blue-600 text-white' : ''
//                 }`}
//               >
//                 Remove Faculty
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default AdminSidebar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const AdminSidebar = () => {
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [facultyDropdown, setFacultyDropdown] = useState(false);
  const [leavesDropdown, setLeavesDropdown] = useState(false); // State for Leaves dropdown
  const location = useLocation();

  // Check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full shadow-md pt-16 overflow-y-auto"
      style={{ zIndex: 50 }} // Ensures it stays on top of other elements
    >
      <nav className="space-y-2 p-4">
        {/* Students Dropdown */}
        <div>
          <div
            onClick={() => setStudentDropdown(!studentDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Students</span>
            {studentDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {studentDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/admin/view-students"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/view-students') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                View Students
              </Link>
              <Link
                to="/admin/add-student"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/add-student') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Add Student
              </Link>
              <Link
                to="/admin/update-student"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/update-student') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Update Student
              </Link>
              <Link
                to="/admin/remove-student"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/remove-student') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Remove Student
              </Link>
            </div>
          )}
        </div>

        {/* Faculty Dropdown */}
        <div>
          <div
            onClick={() => setFacultyDropdown(!facultyDropdown)}
            className="flex justify-between items-center cursor-pointer hover:bg-blue-600 p-2 rounded"
          >
            <span>Faculty</span>
            {facultyDropdown ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
          {facultyDropdown && (
            <div className="pl-4 space-y-2 mt-2">
              <Link
                to="/admin/view-faculty"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/view-faculty') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                View Faculty
              </Link>
              <Link
                to="/admin/add-faculty"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/add-faculty') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Add Faculty
              </Link>
              <Link
                to="/admin/remove-faculty"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/remove-faculty') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Remove Faculty
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
                to="/admin/faculty-leaves"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/faculty-leaves') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Faculty Leaves
              </Link>
              <Link
                to="/admin/admin-leaves"
                className={`block cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded ${
                  isActive('/admin/student-leaves') ? 'bg-blue-600 text-white' : ''
                }`}
              >
                Student Leaves
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
