// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const FacultyTopBar = ({ username }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     navigate('/'); // Redirect to login page
//   };

//   return (
//     <div className="w-full fixed top-0 left-0 bg-blue-600 text-white flex justify-center items-center p-6 shadow-md">
//       {/* Portal Name */}
//       <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
//         Faculty Portal
//       </h1>

//       {/* User Info and Logout */}
//       <div className="absolute right-4 flex items-center space-x-4">
//         <span className="text-white font-medium">
//           Welcome, {username || 'Faculty'}
//         </span>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FacultyTopBar;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyTopBar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all data from localStorage
    navigate('/'); // Redirect to login page
  };

  const goToProfile = () => {
    navigate('/faculty-profile'); // Redirect to faculty profile page
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-blue-600 text-white flex justify-center items-center p-6 shadow-md">
      {/* Portal Name */}
      <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
        Faculty Portal
      </h1>

      {/* User Info, Profile, and Logout */}
      <div className="absolute right-4 flex items-center space-x-4">
        <span className="text-white font-medium">
          Welcome, {username || 'Faculty'}
        </span>
        <button
          onClick={goToProfile}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Profile
        </button>
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

export default FacultyTopBar;
