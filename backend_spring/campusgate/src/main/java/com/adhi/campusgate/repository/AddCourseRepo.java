package com.adhi.campusgate.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adhi.campusgate.model.AddCourse;

@Repository
public interface AddCourseRepo extends JpaRepository<AddCourse, Long> {
    // Additional methods for custom queries if needed
}
