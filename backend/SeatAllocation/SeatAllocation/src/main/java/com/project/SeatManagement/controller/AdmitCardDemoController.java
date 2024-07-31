package com.project.SeatManagement.controller;

import com.project.SeatManagement.service.AdmitCardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user/admit-card")
public class AdmitCardController {
    @Autowired
    private AdmitCardService admitCardService;

    @GetMapping("/{id}/download")
    public ResponseEntity<InputStreamResource> getAdmitCard(@PathVariable("id") Long applicationId){
        ByteArrayInputStream admitCard = admitCardService.generateAdmitCard(applicationId);
        HttpHeaders httpHeader = new HttpHeaders();
        httpHeader.add("Content-Disposition", "inline;filename=\"AdmitCard_"+applicationId.toString()+".pdf\"");

        return ResponseEntity.ok()
                .headers(httpHeader)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(admitCard));
    }

}
