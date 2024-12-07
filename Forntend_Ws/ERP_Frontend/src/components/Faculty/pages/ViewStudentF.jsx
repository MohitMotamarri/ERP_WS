
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import FacultyLayout from '../FacultyLayout';
const ViewStudentsF = () => {
  const [students, setStudents] = useState([]); // State to hold all students data
  const [loading, setLoading] = useState(true); // State for loading spinner
  const [error, setError] = useState(null); // State to handle errors
  const [searchId, setSearchId] = useState(''); // State for the search input
  const [filteredStudent, setFilteredStudent] = useState(null); // State to hold the searched student

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch all students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/faculty/viewAllStudents');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        console.error('Error fetching students:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Fetch a single student by ID
  const handleSearch = async () => {
    if (!searchId.trim()) {
      setFilteredStudent(null); // Clear the filtered student if search is empty
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/faculty/viewStudent/${searchId}`);
      if (!response.ok) {
        throw new Error(`Student with ID ${searchId} not found`);
      }
      const data = await response.json();
      setFilteredStudent(data);
    } catch (err) {
      console.error('Error fetching student:', err);
      setFilteredStudent(null); // Clear the filtered student on error
      setError(err.message);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/faculty/fullstudentf/${id}`); // Navigate to the full view page with student ID
  };

  if (loading) {
    return (
      <FacultyLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-700">Loading students...</p>
        </div>
      </FacultyLayout>
    );
  }

  if (error) {
    return (
      <FacultyLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      </FacultyLayout>
    );
  }

  return (
    <FacultyLayout>
      <div className="bg-white p-6 rounded shadow-md max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">View Students</h2>
        <div className="mb-6">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Student ID"
            className="border border-gray-300 rounded px-4 py-2 w-60 mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {filteredStudent ? (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Student Details:</h3>
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">Father's Name</th>
                  <th className="border border-gray-300 px-4 py-2">Mother's Name</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Program</th>
                  <th className="border border-gray-300 px-4 py-2">Photo</th>
                  <th className="border border-gray-300 px-4 py-2">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.fatherName}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.motherName}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.personalEmail}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredStudent.program}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {filteredStudent.photo ? (
                      <img
                        src={filteredStudent.photo}
                        alt="Student"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewDetails(filteredStudent.id)} // Correct reference for full view
                    >
                      👁️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">Search for a student by ID</p>
        )}

        <h3 className="text-lg font-semibold mt-6">All Students:</h3>
        {students.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Gender</th>
                <th className="border border-gray-300 px-4 py-2">Father's Name</th>
                <th className="border border-gray-300 px-4 py-2">Mother's Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Program</th>
                <th className="border border-gray-300 px-4 py-2">Photo</th>
                <th className="border border-gray-300 px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.fatherName}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.motherName}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.personalEmail}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.program}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {student.photo ? (
                      <img
                        src={student.photo}
                        alt="Student"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewDetails(student.id)} // Correct reference for full view
                    >
                      👁️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No students found</p>
        )}
      </div>
    </FacultyLayout>
  );
};

export default ViewStudentsF;
