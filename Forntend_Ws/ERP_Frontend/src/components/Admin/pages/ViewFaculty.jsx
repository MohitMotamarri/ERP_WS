import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import AdminLayout from '../AdminLayout';

const ViewFaculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [filteredFaculty, setFilteredFaculty] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch('http://localhost:8080/admin/viewAllFaculty');
        if (!response.ok) {
          throw new Error('Failed to fetch faculty');
        }
        const data = await response.json();
        setFacultyList(data);
      } catch (err) {
        console.error('Error fetching faculty:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const handleSearch = async () => {
    if (!searchId.trim()) {
      setFilteredFaculty(null);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/admin/viewFaculty/${searchId}`);
      if (!response.ok) {
        throw new Error(`Faculty with ID ${searchId} not found`);
      }
      const data = await response.json();
      setFilteredFaculty(data);
    } catch (err) {
      console.error('Error fetching faculty:', err);
      setFilteredFaculty(null);
      setError(err.message);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/admin/fullfaculty/${id}`); // Navigate to the full view page with faculty ID
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-700">Loading faculty...</p>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded shadow-md max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">View Faculty</h2>
        <div className="mb-6">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Faculty ID"
            className="border border-gray-300 rounded px-4 py-2 w-60 mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {filteredFaculty ? (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Faculty Details:</h3>
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">Department</th>
                  <th className="border border-gray-300 px-4 py-2">Position</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.facultyName}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.department}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.position}</td>
                  <td className="border border-gray-300 px-4 py-2">{filteredFaculty.personalEmail}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewDetails(filteredFaculty.id)} // Correct reference
                    >
                      👁️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">Search for a faculty member by ID</p>
        )}

        <h3 className="text-lg font-semibold mt-6">All Faculty:</h3>
        {facultyList.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Gender</th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {facultyList.map((faculty) => (
                <tr key={faculty.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{faculty.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{faculty.facultyName}</td>
                  <td className="border border-gray-300 px-4 py-2">{faculty.gender}</td>
                  <td className="border border-gray-300 px-4 py-2">{faculty.department}</td>
                  <td className="border border-gray-300 px-4 py-2">{faculty.position}</td>
                  <td className="border border-gray-300 px-4 py-2">{faculty.personalEmail}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewDetails(faculty.id)} // Correct reference for full view
                    >
                      👁️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No faculty members found</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default ViewFaculty;

