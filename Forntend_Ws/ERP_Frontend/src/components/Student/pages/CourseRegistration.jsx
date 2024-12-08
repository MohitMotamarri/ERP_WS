import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentLayout from "../StudentLayout";

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const studentId = localStorage.getItem("id");

  useEffect(() => {
    // Fetch all courses
    console.log("Fetching all courses");
    axios
      .get("http://localhost:8080/student/getallcourses")
      .then((response) => {
        console.log("Courses fetched successfully:", response.data);
        setCourses(response.data);
      })
      .catch((error) => console.error("Error fetching courses:", error));

    // Fetch registered courses
    axios
      .get(`http://localhost:8080/student/viewCourses?studentId=${studentId}`)
      .then((response) => {
        console.log("Registered courses fetched successfully:", response.data);
        setRegisteredCourses(response.data);
      })
      .catch((error) => console.error("Error fetching registered courses:", error));
  }, [studentId]);

  const handleRegister = (courseId) => {
    const courseMappingDTO = {
      studentId: parseInt(studentId),
      courseId: courseId,
    };

    console.log("Registering for course:", courseMappingDTO);

    axios
      .post("http://localhost:8080/student/register", courseMappingDTO)
      .then((response) => {
        alert(response.data);
        // Update the UI
        setRegisteredCourses((prev) => [...prev, courses.find((c) => c.id === courseId)]);
      })
      .catch((error) => {
        console.error("Error registering for the course:", error);
        alert("Failed to register for the course.");
      });
  };

  return (
    <StudentLayout>

   
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Course Registration</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Course Name</th>
            <th className="border border-gray-200 px-4 py-2">Course Code</th>
            <th className="border border-gray-200 px-4 py-2">Credits</th>
            <th className="border border-gray-200 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="text-center">
              <td className="border border-gray-200 px-4 py-2">{course.courseName}</td>
              <td className="border border-gray-200 px-4 py-2">{course.courseCode}</td>
              <td className="border border-gray-200 px-4 py-2">{course.credits}</td>
              <td className="border border-gray-200 px-4 py-2">
                {registeredCourses.some((rc) => rc.id === course.id) ? (
                  <span className="text-green-500 font-semibold">Registered</span>
                ) : (
                  <button
                    onClick={() => handleRegister(course.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Register
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </StudentLayout>
  );
};

export default CourseRegistration;
