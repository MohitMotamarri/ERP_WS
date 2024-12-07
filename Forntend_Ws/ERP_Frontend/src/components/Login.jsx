// import React, { useState } from "react";

// const Login = () => {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     const tryLogin = async (url, credentials) => {
//       try {
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         });
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//       } catch (err) {
//         console.error(`Login attempt failed for ${url}:`, err);
//         return null;
//       }
//     };

//     try {
//       // 1. Try admin login
//       console.log("Attempting admin login...");
//       let loginData = await tryLogin(
//         "http://localhost:8080/admin/checkadminLogin",
//         { id, password }
//       );
//       if (loginData) {
//         console.log("Admin login successful");
//         localStorage.setItem("id", id);
//         localStorage.setItem("role", "admin");
//         window.location.href = "/admin-homepage";
//         return;
//       }

//       // 2. Try faculty login
//       console.log("Attempting faculty login...");
//       loginData = await tryLogin(
//         "http://localhost:8080/faculty/checkFacultyLogin",
//         { id, password }
//       );
//       if (loginData) {
//         console.log("Faculty login successful");
//         localStorage.setItem("id", id);
//         localStorage.setItem("role", "faculty");
//         // Store additional faculty data if needed
//         window.location.href = "/faculty-homepage";
//         return;
//       }

//       // 3. Try student login
//       console.log("Attempting student login...");
//       loginData = await tryLogin(
//         "http://localhost:8080/student/checkStudentLogin",
//         { id, password }
//       );
//       if (loginData) {
//         console.log("Student login successful");
//         localStorage.setItem("id", id);
//         localStorage.setItem("role", "student");
//         // Store additional student data if needed
//         window.location.href = "/student-homepage";
//         return;
//       }

//       // If all fail, set an error message
//       setError("Invalid login. Please check your credentials.");
//     } catch (err) {
//       setError("Login failed. Please try again.");
//       console.error("Error during login:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           KL ERP Login
//         </h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
//               ID
//             </label>
//             <input
//               id="id"
//               type="text"
//               value={id}
//               onChange={(e) => setId(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your ID"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const tryLogin = async (url, credentials) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (err) {
        console.error(`Login attempt failed for ${url}:`, err);
        return null;
      }
    };

    try {
      // 1. Try admin login
      let loginData = await tryLogin(
        "http://localhost:8080/admin/checkadminLogin",
        { id, password }
      );
      if (loginData) {
        localStorage.setItem("id", id);
        localStorage.setItem("role", "admin");
        localStorage.setItem("adminData", JSON.stringify(loginData)); // Store admin data
        window.location.href = "/admin-homepage";
        return;
      }

      // 2. Try faculty login
      loginData = await tryLogin(
        "http://localhost:8080/faculty/checkFacultyLogin",
        { id, password }
      );
      if (loginData) {
        localStorage.setItem("id", id);
        localStorage.setItem("role", "faculty");
        Object.keys(loginData).forEach((key) => {
          localStorage.setItem(key, loginData[key]); // Store faculty data dynamically
        });
        window.location.href = "/faculty-homepage";
        return;
      }

      // 3. Try student login
      loginData = await tryLogin(
        "http://localhost:8080/student/checkStudentLogin",
        { id, password }
      );
      if (loginData) {
        localStorage.setItem("id", id);
        localStorage.setItem("role", "student");
        Object.keys(loginData).forEach((key) => {
          localStorage.setItem(key, loginData[key]); // Store student data dynamically
        });
        window.location.href = "/student-homepage";
        return;
      }

      // If all fail, set an error message
      setError("Invalid login. Please check your credentials.");
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Error during login:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          KL ERP Login
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
              ID
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your ID"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
