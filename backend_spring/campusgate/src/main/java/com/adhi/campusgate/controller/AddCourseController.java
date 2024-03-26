package com.adhi.campusgate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.adhi.campusgate.model.AddCourse;
import com.adhi.campusgate.service.AddCourseService;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class AddCourseController {

    @Autowired
    private AddCourseService courseService;

    @GetMapping
    public ResponseEntity<List<AddCourse>> getAllCourses() {
        List<AddCourse> courses = courseService.getAllCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddCourse> getCourseById(@PathVariable Long id) {
        AddCourse course = courseService.getCourseById(id);
        if (course != null) {
            return new ResponseEntity<>(course, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<AddCourse> createCourse(@RequestBody AddCourse course) {
        AddCourse createdCourse = courseService.createCourse(course);
        return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddCourse> updateCourse(@PathVariable Long id, @RequestBody AddCourse course) {
        AddCourse updatedCourse = courseService.updateCourse(id, course);
        if (updatedCourse != null) {
            return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
