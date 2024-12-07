// RemoveStudent.jsx
import React, { useState } from 'react';
import AdminLayout from '../AdminLayout';  // Import AdminLayout

const RemoveStudent = () => {
  const [studentId, setStudentId] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setStudentId(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Removing Student with ID:', studentId);

    // Example of API call
    fetch(`http://localhost:8080/admin/delete-student/${studentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('Student removed successfully!');
          setStudentId('');
        } else {
          alert('Failed to remove student.');
        }
      })
      .catch((error) => {
        console.error('Error removing student:', error);
        alert('An error occurred while removing the student.');
      });
  };

  return (
    <AdminLayout> {/* Wrap your content in AdminLayout */}
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Remove Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={studentId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Remove Student
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default RemoveStudent;
