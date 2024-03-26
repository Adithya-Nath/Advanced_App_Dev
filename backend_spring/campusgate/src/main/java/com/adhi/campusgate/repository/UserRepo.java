package com.adhi.campusgate.repository;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.adhi.campusgate.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}