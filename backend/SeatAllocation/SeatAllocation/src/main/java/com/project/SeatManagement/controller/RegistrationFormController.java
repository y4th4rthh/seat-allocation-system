package com.project.SeatManagement.controller;

import com.project.SeatManagement.dto.RegistrationFormDto;
import com.project.SeatManagement.dto.RegistrationFormRequestDto;
import com.project.SeatManagement.service.RegistrationFormService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.project.SeatManagement.mapper.RegistrationFormMapper.mapToFormDto;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user/form")
public class RegistrationFormController {
    @Autowired
    private RegistrationFormService registrationFormService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitForm(RegistrationFormRequestDto registrationFormRequestDto) {
        try {
            RegistrationFormDto registrationFormDto = mapToFormDto(registrationFormRequestDto);
            RegistrationFormDto submittedForm = registrationFormService.submitForm(registrationFormDto);
            return new ResponseEntity<>(submittedForm, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing your request.");
        }
    }

    @GetMapping("/{id}/form-exists")
    public ResponseEntity<?> formExists(@PathVariable("id") Long applicationId) {
        RegistrationFormDto form = registrationFormService.getFormIfExists(applicationId);
        if (form != null) {
            return ResponseEntity.status(HttpStatus.OK).body(form);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Form does not exist for the given applicationId");
        }
    }

    @GetMapping("/{id}/image/photo")
    public ResponseEntity<Resource> getPhotoById(@PathVariable("id") Long applicationId) {
        byte[] photoBytes = registrationFormService.getPhoto(applicationId);
        Resource photoResource = new ByteArrayResource(photoBytes);

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=photo.png")
                .body(photoResource);
    }

    @GetMapping("/{id}/image/sign")
    public ResponseEntity<Resource> getSignById(@PathVariable("id") Long applicationId) {
        byte[] signBytes = registrationFormService.getSign(applicationId);
        Resource signResource = new ByteArrayResource(signBytes);

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=sign.png")
                .body(signResource);
    }
}
