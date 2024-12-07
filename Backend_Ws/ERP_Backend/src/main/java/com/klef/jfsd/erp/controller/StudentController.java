package com.klef.jfsd.erp.controller;

import com.klef.jfsd.erp.DTO.LoginRequest;
import com.klef.jfsd.erp.model.Course;
import com.klef.jfsd.erp.model.Student;
import com.klef.jfsd.erp.service.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;
    
    @GetMapping("/viewCourses")
    public ResponseEntity<List<Course>> viewAllCoursesForFaculty(@RequestParam Long studentId) {
        List<Course> courses = studentService.viewCoursesForStudent(studentId);
        return ResponseEntity.ok(courses);
    }
    
    @PostMapping("/checkStudentLogin")
    public ResponseEntity<Student> checkStudentLogin(@RequestBody LoginRequest request) {
        // Check student login using the id and password
        Student student = studentService.checkStudentLogin(request);
        
        if (student != null) {
            // If login is successful, return student data
            return ResponseEntity.ok(student);
        } else {
            // If login fails, return an error response
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body(null);
        }
    }
}
