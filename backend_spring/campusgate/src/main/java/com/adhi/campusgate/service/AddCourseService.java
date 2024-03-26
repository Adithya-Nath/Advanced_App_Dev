package com.adhi.campusgate.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adhi.campusgate.model.AddCourse;
import com.adhi.campusgate.repository.AddCourseRepo;

import java.util.List;

@Service
public class AddCourseService {

    @Autowired
    private AddCourseRepo courseRepository;

    public List<AddCourse> getAllCourses() {
        return courseRepository.findAll();
    }

    public AddCourse getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    public AddCourse createCourse(AddCourse course) {
        return courseRepository.save(course);
    }

    public AddCourse updateCourse(Long id, AddCourse updatedCourse) {
        AddCourse existingCourse = courseRepository.findById(id).orElse(null);
        if (existingCourse != null) {
            existingCourse.setName(updatedCourse.getName());
            existingCourse.setDescription(updatedCourse.getDescription());
            existingCourse.setDuration(updatedCourse.getDuration());
            existingCourse.setFees(updatedCourse.getFees());
            existingCourse.setSeatsAvailable(updatedCourse.getSeatsAvailable());
            existingCourse.setInstitute(updatedCourse.getInstitute());
            return courseRepository.save(existingCourse);
        }
        return null;
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
