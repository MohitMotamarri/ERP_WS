import React, { useState } from 'react';
import AdminLayout from '../AdminLayout'; // Import AdminLayout

const AddFaculty = () => {
  const [faculty, setFaculty] = useState({
    facultyName: '', // Matches "facultyName"
    facultyGender: '', // Matches "facultyGender"
    facultyDateOfBirth: '', // Matches "facultyDateOfBirth"
    facultyPersonalEmail: '', // Matches "facultyPersonalEmail"
    facultyIdentification: '', // Matches "facultyIdentification"
    facultyDepartment: '', // Matches "facultyDepartment"
    facultyPosition: '', // Matches "facultyPosition"
    facultyAddressContact: '', // Matches "facultyAddressContact"
    facultyPhoto: null, // Matches "facultyPhoto"
    facultyPassword: '', // Matches "facultyPassword"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty({ ...faculty, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFaculty({ ...faculty, facultyPhoto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(faculty).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:8080/admin/addFaculty', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Faculty added successfully!');
        setFaculty({
          facultyName: '',
          facultyGender: '',
          facultyDateOfBirth: '',
          facultyPersonalEmail: '',
          facultyIdentification: '',
          facultyDepartment: '',
          facultyPosition: '',
          facultyAddressContact: '',
          facultyPhoto: null,
          facultyPassword: '',
        });
      } else {
        alert('Failed to add faculty.');
      }
    } catch (error) {
      console.error('Error adding faculty:', error);
      alert('An error occurred while adding the faculty.');
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add Faculty</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Faculty Name */}
          <div>
            <label className="block mb-1 text-gray-700">Faculty Name</label>
            <input
              type="text"
              name="facultyName"
              value={faculty.facultyName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-gray-700">Gender</label>
            <select
              name="facultyGender"
              value={faculty.facultyGender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="facultyDateOfBirth"
              value={faculty.facultyDateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Personal Email */}
          <div>
            <label className="block mb-1 text-gray-700">Personal Email</label>
            <input
              type="email"
              name="facultyPersonalEmail"
              value={faculty.facultyPersonalEmail}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Identification */}
          <div>
            <label className="block mb-1 text-gray-700">Identification</label>
            <input
              type="text"
              name="facultyIdentification"
              value={faculty.facultyIdentification}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 text-gray-700">Department</label>
            <input
              type="text"
              name="facultyDepartment"
              value={faculty.facultyDepartment}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Position */}
          <div>
            <label className="block mb-1 text-gray-700">Position</label>
            <input
              type="text"
              name="facultyPosition"
              value={faculty.facultyPosition}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Address/Contact */}
          <div>
            <label className="block mb-1 text-gray-700">Address/Contact</label>
            <textarea
              name="facultyAddressContact"
              value={faculty.facultyAddressContact}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Faculty Photo */}
          <div>
            <label className="block mb-1 text-gray-700">Faculty Photo</label>
            <input
              type="file"
              name="facultyPhoto"
              onChange={handlePhotoChange}
              className="w-full p-2 border rounded"
              accept="image/*"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name="facultyPassword"
              value={faculty.facultyPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Faculty
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddFaculty;
