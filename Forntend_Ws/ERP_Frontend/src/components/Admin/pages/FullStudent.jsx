import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the dynamic ID from the URL
import AdminLayout from '../AdminLayout';

const FullStudent = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [student, setStudent] = useState(null); // State to hold student data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch student details by ID
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/viewStudent/${id}`);
        if (!response.ok) {
          throw new Error(`Student with ID ${id} not found`);
        }
        const data = await response.json();
        setStudent(data);
      } catch (err) {
        console.error('Error fetching student:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-700">Loading student details...</p>
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
      <div className="bg-white p-6 rounded shadow-md max-w-6xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">Student Details</h2>

        {/* Student Photo and Details Card */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img
              src={student.photo || 'https://via.placeholder.com/150'}
              alt="Student"
              className="rounded-full border-2 border-gray-300 w-32 h-32 object-cover"
            />
          </div>

          <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
            <div className="mb-4">
              <strong className="text-lg">Full Name:</strong>
              <p>{student.studentName}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Gender:</strong>
              <p>{student.gender}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Date of Birth:</strong>
              <p>{new Date(student.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Personal Email:</strong>
              <p>{student.personalEmail}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Identification:</strong>
              <p>{student.identification}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Major Degree:</strong>
              <p>{student.majorDegree}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Program:</strong>
              <p>{student.program}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Contact Address:</strong>
              <p>{student.addressContact}</p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Courses Enrolled by {student.studentName}:</h3>
          {student.courses.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {student.courses.map((course) => (
                <li key={course.id} className="text-lg">
                  <strong>{course.courseName}</strong> ({course.courseCode}) - {course.credits} credits
                </li>
              ))}
            </ul>
          ) : (
            <p>No courses found for this student.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default FullStudent;
