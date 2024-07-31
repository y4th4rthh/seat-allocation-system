package com.project.SeatManagement.service;

import java.io.ByteArrayInputStream;

public interface AdmitCardService {
    ByteArrayInputStream generateAdmitCard(Long applicationId);
}
