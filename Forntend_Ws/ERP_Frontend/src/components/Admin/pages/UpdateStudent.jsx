import React, { useState, useEffect } from "react";
import AdminLayout from "../AdminLayout"; // Import AdminLayout
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = ({ student }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentGender: "",
    studentFatherName: "",
    studentMotherName: "",
    studentFatherContact: "",
    studentMotherContact: "",
    studentDateOfBirth: "",
    studentPersonalEmail: "",
    studentIdentification: "",
    studentMajorDegree: "",
    studentProgram: "",
    studentAddressContact: "",
    studentPhoto: null,
    studentPassword: "",
    studentId: "",  // Add studentId to formData
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Pre-fill form data with the passed student object
    if (student) {
      setFormData({
        studentId: student.id || "",  // Set studentId from student prop
        studentName: student.studentName || "",
        studentGender: student.studentGender || "",
        studentFatherName: student.studentFatherName || "",
        studentMotherName: student.studentMotherName || "",
        studentFatherContact: student.studentFatherContact || "",
        studentMotherContact: student.studentMotherContact || "",
        studentDateOfBirth: student.studentDateOfBirth || "",
        studentPersonalEmail: student.studentPersonalEmail || "",
        studentIdentification: student.studentIdentification || "",
        studentMajorDegree: student.studentMajorDegree || "",
        studentProgram: student.studentProgram || "",
        studentAddressContact: student.studentAddressContact || "",
        studentPassword: student.studentPassword || "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    if (e.target.name === "studentPhoto") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    let errors = {};

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|.*\.in)$/;
    if (!emailPattern.test(formData.studentPersonalEmail)) {
      errors.studentPersonalEmail = "Email must end with @gmail.com, .in, or @yahoo.com";
    }

    // Contact validation for father and mother
    if (!/^\d{10}$/.test(formData.studentFatherContact)) {
      errors.studentFatherContact = "Father's contact number must be exactly 10 digits";
    }
    if (!/^\d{10}$/.test(formData.studentMotherContact)) {
      errors.studentMotherContact = "Mother's contact number must be exactly 10 digits";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const updatedStudent = {
      ...formData,
      id: formData.studentId, // Use the studentId from formData
    };

    const form = new FormData();
    for (const key in updatedStudent) {
      form.append(key, updatedStudent[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/admin/updateStudent`, 
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Student updated successfully!");
      } else {
        toast.error("Failed to update student. Please try again.");
      }
    } catch (error) {
      console.error("Error updating student:", error);
      toast.error(error.response?.data || "Error updating student.");
    }
  };

  const handleClear = () => {
    setFormData({
      studentName: "",
      studentGender: "",
      studentFatherName: "",
      studentMotherName: "",
      studentFatherContact: "",
      studentMotherContact: "",
      studentDateOfBirth: "",
      studentPersonalEmail: "",
      studentIdentification: "",
      studentMajorDegree: "",
      studentProgram: "",
      studentAddressContact: "",
      studentPhoto: null,
      studentPassword: "",
      studentId: "",
    });
    setErrors({});
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student ID */}
          <div>
            <label className="block mb-1 text-gray-700">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Student Name */}
          <div>
            <label className="block mb-1 text-gray-700">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Gender and Date of Birth */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700">Gender</label>
              <select
                name="studentGender"
                value={formData.studentGender}
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
            <div>
              <label className="block mb-1 text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="studentDateOfBirth"
                value={formData.studentDateOfBirth}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Parent Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700">Father's Name</label>
              <input
                type="text"
                name="studentFatherName"
                value={formData.studentFatherName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Mother's Name</label>
              <input
                type="text"
                name="studentMotherName"
                value={formData.studentMotherName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Father's Contact</label>
              <input
                type="text"
                name="studentFatherContact"
                value={formData.studentFatherContact}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.studentFatherContact && (
                <span className="text-red-500">{errors.studentFatherContact}</span>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Mother's Contact</label>
              <input
                type="text"
                name="studentMotherContact"
                value={formData.studentMotherContact}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.studentMotherContact && (
                <span className="text-red-500">{errors.studentMotherContact}</span>
              )}
            </div>
          </div>

          {/* Contact and Academic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700">Personal Email</label>
              <input
                type="email"
                name="studentPersonalEmail"
                value={formData.studentPersonalEmail}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.studentPersonalEmail && (
                <span className="text-red-500">{errors.studentPersonalEmail}</span>
              )}
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Address/Contact</label>
              <textarea
                name="studentAddressContact"
                value={formData.studentAddressContact}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="2"
                required
              ></textarea>
            </div>
          </div>

          {/* Academic Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700">Major Degree</label>
              <input
                type="text"
                name="studentMajorDegree"
                value={formData.studentMajorDegree}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Program</label>
              <input
                type="text"
                name="studentProgram"
                value={formData.studentProgram}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Identification */}
          <div>
            <label className="block mb-1 text-gray-700">Identification</label>
            <input
              type="text"
              name="studentIdentification"
              value={formData.studentIdentification}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* password */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="text"
              name="studentPassword"
              value={formData.studentPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-1 text-gray-700">Photo</label>
            <input
              type="file"
              name="studentPhoto"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Student
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
};

export default UpdateStudent;
