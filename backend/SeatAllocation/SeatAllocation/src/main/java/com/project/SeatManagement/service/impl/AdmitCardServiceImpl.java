package com.project.SeatManagement.service.impl;

import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.*;
import com.lowagie.text.alignment.HorizontalAlignment;
import com.lowagie.text.alignment.VerticalAlignment;
import com.lowagie.text.pdf.PdfDate;
import com.lowagie.text.pdf.PdfWriter;
import com.project.SeatManagement.entity.Allocation;
import com.project.SeatManagement.entity.ExamAdministration;
import com.project.SeatManagement.entity.RegistrationForm;
import com.project.SeatManagement.repository.AllocationRepository;
import com.project.SeatManagement.repository.ExamAdministrationRepository;
import com.project.SeatManagement.repository.RegistrationFormRepository;
import com.project.SeatManagement.service.AdmitCardService;
import com.project.SeatManagement.util.AdmitCardUtil;
import com.project.SeatManagement.util.ImageUtil;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

@Service
@AllArgsConstructor
public class AdmitCardServiceImpl implements AdmitCardService {
    @Autowired
    private RegistrationFormRepository registrationFormRepository;

    @Autowired
    private AllocationRepository allocationRepository;

    @Autowired
    private ExamAdministrationRepository examAdministrationRepository;

    @Override
    public ByteArrayInputStream generateAdmitCard(Long applicationId) {

        RegistrationForm form = registrationFormRepository.findById(applicationId).orElse(null);
        Allocation allocatedCentre = allocationRepository.findById(applicationId).orElse(null);
        ExamAdministration examAdministration = examAdministrationRepository.findExamAdministrationById(1L);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Document document = new Document(PageSize.A4, 40f, 40f, 40f, 40f);

        PdfWriter.getInstance(document, outputStream);
        document.open();

        AdmitCardUtil.createPdf(document, form, allocatedCentre, examAdministration);

        document.close();

        return new ByteArrayInputStream(outputStream.toByteArray());
    }

}