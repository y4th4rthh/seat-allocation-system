package com.project.SeatManagement.service;

import com.project.SeatManagement.dto.RegistrationFormDto;

public interface RegistrationFormService {
    RegistrationFormDto submitForm(RegistrationFormDto registrationFormDto);
    RegistrationFormDto getFormIfExists(Long applicationId);
    byte[] getPhoto(Long applicationId);
    byte[] getSign(Long applicationId);
}
