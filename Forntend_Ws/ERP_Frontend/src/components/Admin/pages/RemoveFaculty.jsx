// RemoveFaculty.jsx
import React, { useState } from 'react';
import AdminLayout from '../AdminLayout';  // Import AdminLayout

const RemoveFaculty = () => {
  const [facultyId, setFacultyId] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFacultyId(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Removing Faculty with ID:', facultyId);

    // Example of API call
    fetch(`http://localhost:8080/admin/delete-faculty/${facultyId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('Faculty removed successfully!');
          setFacultyId('');
        } else {
          alert('Failed to remove faculty.');
        }
      })
      .catch((error) => {
        console.error('Error removing faculty:', error);
        alert('An error occurred while removing the faculty.');
      });
  };

  return (
    <AdminLayout> {/* Wrap your content in AdminLayout */}
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Remove Faculty</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Faculty ID</label>
            <input
              type="text"
              name="facultyId"
              value={facultyId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Remove Faculty
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default RemoveFaculty;
