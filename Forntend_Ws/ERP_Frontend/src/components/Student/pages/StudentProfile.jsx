import React, { useEffect, useState } from "react";
import StudentLayout from "../StudentLayout";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Retrieve student data from localStorage
    const student = {
      id: localStorage.getItem("id"),
      name: localStorage.getItem("name"),
      gender: localStorage.getItem("gender"),
      fatherName: localStorage.getItem("fatherName"),
      motherName: localStorage.getItem("motherName"),
      fatherContact: localStorage.getItem("fatherContact"),
      motherContact: localStorage.getItem("motherContact"),
      photo: localStorage.getItem("photo"),
      dateOfBirth: localStorage.getItem("dateOfBirth"),
      personalEmail: localStorage.getItem("personalEmail"),
      identification: localStorage.getItem("identification"),
      majorDegree: localStorage.getItem("majorDegree"),
      program: localStorage.getItem("program"),
      addressContact: localStorage.getItem("addressContact"),
      password: localStorage.getItem("password"),
      courses: JSON.parse(localStorage.getItem("courses") || "[]"), // Parse courses as an array
    };

    setStudentData(student);
  }, []);

  if (!studentData) {
    return <div>Loading...</div>; // Show loading until data is available
  }

  return (
    <StudentLayout>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-6 mb-6">
            {/* Display Student Photo */}
            {studentData.photo ? (
              <img
                src={studentData.photo}
                alt="Student"
                className="w-32 h-32 rounded-full border-2 border-blue-500"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xl">
                No Photo
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{studentData.name}</h2>
              <p className="text-gray-600">{studentData.program}</p>
              <p className="text-gray-600">Major: {studentData.majorDegree}</p>
            </div>
          </div>

          {/* Student Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Personal Information</h3>
              <p className="text-gray-600">Gender: {studentData.gender}</p>
              <p className="text-gray-600">Date of Birth: {studentData.dateOfBirth}</p>
              <p className="text-gray-600">Personal Email: {studentData.personalEmail}</p>
              <p className="text-gray-600">Identification Mark: {studentData.identification}</p>
              <p className="text-gray-600">Password: {studentData.password}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700">Family Details</h3>
              <p className="text-gray-600">Father's Name: {studentData.fatherName}</p>
              <p className="text-gray-600">Father's Contact: {studentData.fatherContact}</p>
              <p className="text-gray-600">Mother's Name: {studentData.motherName}</p>
              <p className="text-gray-600">Mother's Contact: {studentData.motherContact}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700">Contact Details</h3>
              <p className="text-gray-600">Address: {studentData.addressContact}</p>
            </div>

            {/* <div>
              <h3 className="text-lg font-medium text-gray-700">Courses</h3>
              {studentData.courses.length > 0 ? (
                <ul className="text-gray-600 list-disc ml-5">
                  {studentData.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No courses registered.</p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentProfile;
