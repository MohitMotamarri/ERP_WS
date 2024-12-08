// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-6">KL ERP</h1>
//         <p className="text-xl italic max-w-xl mx-auto mb-8">
//           "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
//         </p>
//         <button 
//           onClick={() => window.location.href = '/login'}
//           className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">KL ERP</h1>
        <p className="text-xl italic max-w-xl mx-auto mb-8">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        </p>
        <div className="flex space-x-4 justify-center ml-10">
          <button 
            onClick={() => window.location.href = '/login'}
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Login
          </button>
          <button 
            onClick={() => window.location.href = '/contactus'}
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

