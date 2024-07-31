package com.project.SeatManagement.service.impl;

import com.project.SeatManagement.dto.RegistrationFormDto;
import com.project.SeatManagement.entity.RegistrationForm;
import com.project.SeatManagement.mapper.RegistrationFormMapper;
import com.project.SeatManagement.repository.RegistrationFormRepository;
import com.project.SeatManagement.service.RegistrationFormService;
import com.project.SeatManagement.util.ImageUtil;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistrationFormImpl implements RegistrationFormService {

    private RegistrationFormRepository registrationFormRepository;
    @Override
    public RegistrationFormDto submitForm(RegistrationFormDto registrationFormDto) {
        RegistrationForm form = RegistrationFormMapper.mapToForm(registrationFormDto);
        RegistrationForm submittedForm = registrationFormRepository.save(form);

        return RegistrationFormMapper.mapToFormDto(submittedForm);
    }

    @Override
    public RegistrationFormDto getFormIfExists(Long applicationId) {
        Optional<RegistrationForm> form = registrationFormRepository.findRegistrationFormByApplicationId(applicationId);
        return form.map(RegistrationFormMapper::mapToFormDto).orElse(null);
    }

    @Transactional
    public byte[] getPhoto(Long applicationId) {
        Optional<RegistrationForm> form = registrationFormRepository.findRegistrationFormByApplicationId(applicationId);
        return form.map(registrationForm -> ImageUtil.decompressImage(registrationForm.getPhoto())).orElse(null);
    }


    @Transactional
    public byte[] getSign(Long applicationId) {
        Optional<RegistrationForm> form = registrationFormRepository.findRegistrationFormByApplicationId(applicationId);
        return form.map(registrationForm -> ImageUtil.decompressImage(registrationForm.getSign())).orElse(null);
    }
}
