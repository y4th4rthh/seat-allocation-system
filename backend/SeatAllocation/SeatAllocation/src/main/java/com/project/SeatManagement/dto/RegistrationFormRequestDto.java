package com.project.SeatManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationFormRequestDto {

    private Long applicationId;
    private String firstName;
    private String lastName;
    private String gender;
    private Date dob;
    private String cityChoice1;
    private String cityChoice2;
    private MultipartFile photo;
    private MultipartFile sign;
}
