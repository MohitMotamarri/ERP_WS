// import React, { useEffect, useState } from 'react';
// import FacultyLayout from '../FacultyLayout';

// const FacultyProfile = () => {
//   const [facultyData, setFacultyData] = useState(null);

//   useEffect(() => {
//     // Retrieve data from localStorage
//     const faculty = {
//       id: localStorage.getItem('id'),
//       facultyName: localStorage.getItem('facultyName'),
//       gender: localStorage.getItem('gender'),
//       dateOfBirth: localStorage.getItem('dateOfBirth'),
//       personalEmail: localStorage.getItem('personalEmail'),
//       identification: localStorage.getItem('identification'),
//       department: localStorage.getItem('department'),
//       position: localStorage.getItem('position'),
//       addressContact: localStorage.getItem('addressContact'),
//       facultyPhoto: localStorage.getItem('facultyPhoto'),
//     };

//     setFacultyData(faculty);
//   }, []);

//   if (!facultyData) {
//     return <div>Loading...</div>; // Show loading until data is available
//   }

//   return (
//     <FacultyLayout>

    
    
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
//         <div className="flex items-center space-x-6 mb-6">
//           {/* Display Faculty Photo */}
//           {facultyData.facultyPhoto ? (
//             <img
//               src={facultyData.facultyPhoto}
//               alt="Faculty"
//               className="w-32 h-32 rounded-full border-2 border-blue-500"
//             />
//           ) : (
//             <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
//               No Photo
//             </div>
//           )}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">{facultyData.facultyName}</h2>
//             <p className="text-gray-600">{facultyData.position}</p>
//             <p className="text-gray-600">Department: {facultyData.department}</p>
//           </div>
//         </div>

//         {/* Faculty Details */}
//         <div className="space-y-4">
//           <div>
//             <h3 className="text-lg font-medium text-gray-700">Personal Information</h3>
//             <p className="text-gray-600">Gender: {facultyData.gender}</p>
//             <p className="text-gray-600">Date of Birth: {facultyData.dateOfBirth}</p>
//             <p className="text-gray-600">Personal Email: {facultyData.personalEmail}</p>
//             <p className="text-gray-600">Identification: {facultyData.identification}</p>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium text-gray-700">Contact Details</h3>
//             <p className="text-gray-600">Address: {facultyData.addressContact}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </FacultyLayout>
//   );
// };

// export default FacultyProfile;



import React, { useEffect, useState } from 'react';
import FacultyLayout from '../FacultyLayout';

const FacultyProfile = () => {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const faculty = {
      id: localStorage.getItem('id'),
      facultyName: localStorage.getItem('facultyName'),
      gender: localStorage.getItem('gender'),
      dateOfBirth: localStorage.getItem('dateOfBirth'),
      personalEmail: localStorage.getItem('personalEmail'),
      identification: localStorage.getItem('identification'),
      department: localStorage.getItem('department'),
      position: localStorage.getItem('position'),
      addressContact: localStorage.getItem('addressContact'),
      facultyPhoto: localStorage.getItem('facultyPhoto'),
      password: localStorage.getItem('password'),
      courses: JSON.parse(localStorage.getItem('courses') || '[]'), // Parse courses as an array
    };

    setFacultyData(faculty);
  }, []);

  if (!facultyData) {
    return <div>Loading...</div>; // Show loading until data is available
  }

  return (
    <FacultyLayout>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-6 mb-6">
            {/* Display Faculty Photo */}
            {facultyData.facultyPhoto ? (
              <img
                src={facultyData.facultyPhoto}
                alt="Faculty"
                className="w-32 h-32 rounded-full border-2 border-blue-500"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
                No Photo
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{facultyData.facultyName}</h2>
              <p className="text-gray-600">{facultyData.position}</p>
              <p className="text-gray-600">Department: {facultyData.department}</p>
            </div>
          </div>

          {/* Faculty Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Personal Information</h3>
              <p className="text-gray-600">Gender: {facultyData.gender}</p>
              <p className="text-gray-600">Date of Birth: {facultyData.dateOfBirth}</p>
              <p className="text-gray-600">Personal Email: {facultyData.personalEmail}</p>
              <p className="text-gray-600">Identification: {facultyData.identification}</p>
              <p className="text-gray-600">Password: {facultyData.password}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700">Contact Details</h3>
              <p className="text-gray-600">Address: {facultyData.addressContact}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700">Courses</h3>
              {facultyData.courses.length > 0 ? (
                <ul className="text-gray-600 list-disc ml-5">
                  {facultyData.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No courses assigned.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </FacultyLayout>
  );
};

export default FacultyProfile;
