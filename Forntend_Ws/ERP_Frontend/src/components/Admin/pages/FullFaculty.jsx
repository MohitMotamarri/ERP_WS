import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the dynamic ID from the URL
import AdminLayout from '../AdminLayout';

const FullFaculty = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [faculty, setFaculty] = useState(null); // State to hold faculty data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch faculty details by ID
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch(`http://localhost:8080/admin/viewFaculty/${id}`);
        if (!response.ok) {
          throw new Error(`Faculty with ID ${id} not found`);
        }
        const data = await response.json();
        setFaculty(data);
      } catch (err) {
        console.error('Error fetching faculty:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [id]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-700">Loading faculty details...</p>
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
        <h2 className="text-3xl font-bold mb-4">Faculty Details</h2>

        {/* Faculty Photo and Details Card */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img
              src={faculty.facultyPhoto || 'https://via.placeholder.com/150'}
              alt="Faculty"
              className="rounded-full border-2 border-gray-300 w-32 h-32 object-cover"
            />
          </div>

          <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
            <div className="mb-4">
              <strong className="text-lg">Full Name:</strong>
              <p>{faculty.facultyName}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Gender:</strong>
              <p>{faculty.gender}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Date of Birth:</strong>
              <p>{new Date(faculty.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Personal Email:</strong>
              <p>{faculty.personalEmail}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Identification:</strong>
              <p>{faculty.identification}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Department:</strong>
              <p>{faculty.department}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Position:</strong>
              <p>{faculty.position}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Contact Address:</strong>
              <p>{faculty.addressContact}</p>
            </div>
            <div className="mb-4">
              <strong className="text-lg">Password:</strong>
              <p>{faculty.password}</p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Courses Taught by {faculty.facultyName}:</h3>
          {faculty.courses.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {faculty.courses.map((course) => (
                <li key={course.id} className="text-lg">
                  <strong>{course.courseName}</strong> ({course.courseCode}) - {course.credits} credits
                </li>
              ))}
            </ul>
          ) : (
            <p>No courses found for this faculty member.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default FullFaculty;
