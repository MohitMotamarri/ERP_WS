import React, { useState } from "react";
import AdminLayout from "../AdminLayout"; // Import AdminLayout
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudent = () => {
  const [student, setStudent] = useState({
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
    studentPhoto: null, // added field for photo
    studentPassword:"",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "studentPhoto") {
      setStudent({ ...student, [e.target.name]: e.target.files[0] });
    } else {
      setStudent({ ...student, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    let errors = {};

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|.*\.in)$/;
    if (!emailPattern.test(student.studentPersonalEmail)) {
      errors.studentPersonalEmail = "Email must end with @gmail.com, .in, or @yahoo.com";
    }

    // Contact validation for father and mother
    if (!/^\d{10}$/.test(student.studentFatherContact)) {
      errors.studentFatherContact = "Father's contact number must be exactly 10 digits";
    }
    if (!/^\d{10}$/.test(student.studentMotherContact)) {
      errors.studentMotherContact = "Mother's contact number must be exactly 10 digits";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validate()) return;
  
    const formData = new FormData();
    
    // Add each student field individually
    formData.append("studentName", student.studentName);
    formData.append("studentGender", student.studentGender);
    formData.append("studentFatherName", student.studentFatherName);
    formData.append("studentMotherName", student.studentMotherName);
    formData.append("studentFatherContact", student.studentFatherContact);
    formData.append("studentMotherContact", student.studentMotherContact);
    formData.append("studentDateOfBirth", student.studentDateOfBirth);
    formData.append("studentPersonalEmail", student.studentPersonalEmail);
    formData.append("studentIdentification", student.studentIdentification);
    formData.append("studentMajorDegree", student.studentMajorDegree);
    formData.append("studentProgram", student.studentProgram);
    formData.append("studentAddressContact", student.studentAddressContact);
    formData.append("studentPassword",student.studentPassword)
  
    // Append the photo file
    formData.append("photo", student.studentPhoto);
  
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/addStudent",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Student added successfully!");
        setStudent({
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
          studentPassword:"",
        });
      } else {
        toast.error("Failed to add student. Please try again.");
      }
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error(error.response?.data || "Error adding student.");
    }
  };

  const handleClear = () => {
    setStudent({
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
      studentPassword:"",
    });
    setErrors({});
  };
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div>
            <label className="block mb-1 text-gray-700">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={student.studentName}
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
                value={student.studentGender}
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
                value={student.studentDateOfBirth}
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
                value={student.studentFatherName}
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
                value={student.studentMotherName}
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
                value={student.studentFatherContact}
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
                value={student.studentMotherContact}
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
                value={student.studentPersonalEmail}
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
                value={student.studentAddressContact}
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
                value={student.studentMajorDegree}
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
                value={student.studentProgram}
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
              value={student.studentIdentification}
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
              value={student.studentPassword}
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
              required
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
              Add Student
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
};

export default AddStudent;
