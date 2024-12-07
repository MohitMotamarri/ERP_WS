import React, { useEffect, useState } from "react";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  const fetchCourses = async () => {
    try {
      const studentId = localStorage.getItem("studentId"); // Assuming studentId is stored in localStorage
      if (!studentId) {
        setError("Student ID not found. Please log in again.");
        return;
      }

      const response = await fetch(`http://localhost:8080/student/${studentId}/courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        setError("Failed to fetch courses. Please try again later.");
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registered Courses</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {courses.length > 0 ? (
          <ul className="space-y-4">
            {courses.map((course) => (
              <li key={course.id} className="border rounded-md p-4 shadow-sm">
                <h3 className="font-bold text-lg">{course.courseName}</h3>
                <p>Course Code: {course.courseCode}</p>
                <p>Credits: {course.credits}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No courses registered.</p>
        )}
      </div>
    </div>
  );
};

export default ViewCourses;
