// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import AddStudent from './components/Admin/pages/AddStudent';
import AdminHomePage from './components/Admin/AdminHomePage';
import AddFaculty from './components/Admin/pages/AddFaculty';
import RemoveFaculty from './components/Admin/pages/RemoveFaculty';
import RemoveStudent from './components/Admin/pages/RemoveStudent';
import ViewStudents from './components/Admin/pages/ViewStudents';
import ViewFaculty from './components/Admin/pages/ViewFaculty';
import FullFaculty from './components/Admin/pages/FullFaculty';
import FullStudent from './components/Admin/pages/FullStudent';
import UpdateStudent from './components/Admin/pages/UpdateStudent';
import StudentHomePage from './components/Student/StudentHomePage';
import FacultyHomePage from './components/Faculty/FacultyHomePage';
import StuViewCourses from './components/Student/pages/ViewCourses';
import StudentProfile from './components/Student/pages/StudentProfile';

import ViewStudentsF from './components/Faculty/pages/ViewStudentF';
import FacultyProfile from './components/Faculty/pages/FacultyProfile';
import FullStudentF from './components/Faculty/pages/FullStudentF';
import AdminLeaveManagement from './components/Admin/pages/AdminLeaveManagement';
import ViewFacultyLeave from './components/Faculty/pages/ViewFacultyLeave';
import FacultyLeaveForm from './components/Faculty/pages/FacultyLeaveForm';

import CourseRegistration from './components/Student/pages/CourseRegistration';

import ContactUs from './ContactUs';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/" element={<FacultyHomePage/>} /> */}
        
        <Route path="/Login" element={<Login/>} />
        <Route path="/admin-homepage" element={<AdminHomePage />} />
        <Route path="/student-homepage" element={<StudentHomePage />} />
        <Route path="/faculty-homepage" element={<FacultyHomePage />} />
        <Route path="/faculty-profile" element={<FacultyProfile />} />
        <Route path="/faculty/view-students" element={<ViewStudentsF />} />
        <Route path="/faculty/fullstudentf/:id" element={<FullStudentF />} />

        <Route path="/admin/faculty-leaves" element={<AdminLeaveManagement />} />
        <Route path="/faculty/applied-leaves" element={<ViewFacultyLeave />} />
        <Route path="/faculty/leaveform" element={<FacultyLeaveForm />} />


        <Route path="/admin/add-faculty" element={<AddFaculty />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/remove-student" element={<RemoveStudent />} />
        <Route path="/admin/remove-faculty" element={<RemoveFaculty />} />
        <Route path="/admin/view-students" element={<ViewStudents/>}/>
        <Route path="/admin/view-faculty" element={<ViewFaculty/>}/>
        <Route path="/admin/fullfaculty/:id" element={<FullFaculty />} />
        <Route path="/admin/fullstudent/:id" element={<FullStudent />} />
        <Route path="/admin/update-student" element={<UpdateStudent />} />


        <Route path="/student/view-courses" element={<StuViewCourses />} />
        <Route path="/student/register-courses" element={< CourseRegistration/>} />

        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/student/profile" element={<StudentProfile/>} />


        
        
        
      </Routes>
    </Router>
  );
};

export default App;