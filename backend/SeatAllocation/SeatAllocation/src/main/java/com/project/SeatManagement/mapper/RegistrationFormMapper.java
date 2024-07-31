package com.project.SeatManagement.mapper;

import com.project.SeatManagement.dto.RegistrationFormDto;
import com.project.SeatManagement.dto.RegistrationFormRequestDto;
import com.project.SeatManagement.entity.RegistrationForm;
import com.project.SeatManagement.util.ImageUtil;

import java.io.IOException;

public class RegistrationFormMapper {
    public static RegistrationFormDto mapToFormDto(RegistrationForm registrationForm){
        return new RegistrationFormDto(
                registrationForm.getApplicationId(),
                registrationForm.getFirstName(),
                registrationForm.getLastName(),
                registrationForm.getGender(),
                registrationForm.getDob(),
                registrationForm.getCityChoice1(),
                registrationForm.getCityChoice2(),
                registrationForm.getPhoto(),
                registrationForm.getSign()
        );
    }

    public static RegistrationForm mapToForm(RegistrationFormDto registrationFormDto){
        return new RegistrationForm(
                registrationFormDto.getApplicationId(),
                registrationFormDto.getFirstName(),
                registrationFormDto.getLastName(),
                registrationFormDto.getGender(),
                registrationFormDto.getDob(),
                registrationFormDto.getCityChoice1(),
                registrationFormDto.getCityChoice2(),
                registrationFormDto.getPhoto(),
                registrationFormDto.getSign()
        );
    }

    public static RegistrationFormDto mapToFormDto(RegistrationFormRequestDto registrationFormRequestDto){
        try {
            return new RegistrationFormDto(
                    registrationFormRequestDto.getApplicationId(),
                    registrationFormRequestDto.getFirstName(),
                    registrationFormRequestDto.getLastName(),
                    registrationFormRequestDto.getGender(),
                    registrationFormRequestDto.getDob(),
                    registrationFormRequestDto.getCityChoice1(),
                    registrationFormRequestDto.getCityChoice2(),
                    ImageUtil.compressImage(registrationFormRequestDto.getPhoto().getBytes()),
                    ImageUtil.compressImage(registrationFormRequestDto.getSign().getBytes())
            );
        } catch (IOException e) {
            throw new com.project.SeatManagement.exception.IOException("Error while processing image");
        }
    }
}
