

package com.adhi.campusgate.service;

import com.adhi.campusgate.dto.request.LoginRequest;
import com.adhi.campusgate.dto.request.RegisterRequest;
import com.adhi.campusgate.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}