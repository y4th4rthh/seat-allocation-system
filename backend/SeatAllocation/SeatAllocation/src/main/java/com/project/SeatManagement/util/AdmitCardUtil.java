package com.project.SeatManagement.util;

import com.lowagie.text.*;
import com.lowagie.text.Image;
import com.lowagie.text.alignment.HorizontalAlignment;
import com.lowagie.text.alignment.VerticalAlignment;
import com.lowagie.text.pdf.PdfDate;
import com.project.SeatManagement.entity.Allocation;
import com.project.SeatManagement.entity.ExamAdministration;
import com.project.SeatManagement.entity.RegistrationForm;
import lombok.SneakyThrows;
import org.springframework.core.io.ClassPathResource;

import java.awt.*;
import java.sql.Time;

public class AdmitCardUtil {

    public static void createPdf(Document document, RegistrationForm form, Allocation allocatedCentre, ExamAdministration examAdministration){
        addMetaData(document);
        addHeader(document);
        addBasicDetails(document, form);
        addVenueDetails(document, allocatedCentre, examAdministration);
        addDirectorSignature(document);
    }

    private static void addMetaData(Document document){
        document.addCreator("NTA");
        document.addCreationDate(new PdfDate());
        document.addSubject("Admit Card");
    }

    @SneakyThrows
    private static void addHeader(Document document){
        Chunk headerChunk = new Chunk("Entrance Exam", AdmitCardFont.HEADER_FONT.getFont());
        Chunk subHeaderChunk = new Chunk("Admit Card", AdmitCardFont.SUB_HEADER_FONT.getFont());

        Paragraph headerParagraph = new Paragraph(headerChunk + "\n"+ subHeaderChunk);
        headerParagraph.setAlignment(Element.ALIGN_CENTER);

        ClassPathResource resource = new ClassPathResource("./images/NTA_logo.png");
        Image NTA_logo = Image.getInstance(resource.getInputStream().readAllBytes());

        Table headerTable = new Table(2);
        headerTable.setWidths(new float[]{70f, 30f});
        headerTable.setPadding(4f);
        headerTable.setBorderWidth(0);
        headerTable.setWidth(100f);

        Cell headerTextCell = new Cell(headerParagraph);
        headerTextCell.setBorderWidth(0);
        headerTextCell.setHorizontalAlignment(HorizontalAlignment.CENTER);
        headerTextCell.setVerticalAlignment(VerticalAlignment.CENTER);

        NTA_logo.setAlignment(Image.ALIGN_MIDDLE);
        NTA_logo.scalePercent(35, 35);
        Cell headerImageCell = new Cell();
        headerImageCell.addElement(NTA_logo);
        headerImageCell.setBorderWidth(1);
        headerImageCell.setBorderColor(Color.lightGray);
        headerImageCell.setHorizontalAlignment(HorizontalAlignment.LEFT);
        headerImageCell.setVerticalAlignment(VerticalAlignment.BOTTOM);
//        headerImageCell.setTop(15f);

        headerTable.addCell(headerTextCell);
        headerTable.addCell(headerImageCell);

        document.add(headerTable);
    }

    private static void addBasicDetails(Document document, RegistrationForm form){
        Table basicDetailsTable = new Table(3);
        basicDetailsTable.setPadding(4f);
        basicDetailsTable.setWidth(100f);
        basicDetailsTable.setWidths(new int[]{35, 35, 30});
        basicDetailsTable.setOffset(10f);
        basicDetailsTable.setBorderWidth(0f);
        basicDetailsTable.setBorderColor(Color.lightGray);

        addRowToTable(basicDetailsTable, "Application Id", String.valueOf(form.getApplicationId()),0, 0);
        addRowToTable(basicDetailsTable, "Seat No", "",1, 0);
        addRowToTable(basicDetailsTable, "Photograph", form.getPhoto(),0,2);
        addRowToTable(basicDetailsTable, "First Name", form.getFirstName(),2, 0);
        addRowToTable(basicDetailsTable, "Last Name", form.getLastName(),3, 0);
        addRowToTable(basicDetailsTable, "Gender", form.getGender(),4, 0);
        addRowToTable(basicDetailsTable, "DOB", form.getDob().toString(),5, 0);
        addRowToTable(basicDetailsTable, "Person with Disability", "",6, 0);
        addRowToTable(basicDetailsTable, "", "",7, 0);
        addRowToTable(basicDetailsTable, "", "",8, 0);
        addRowToTable(basicDetailsTable, "Signature", form.getSign(),5,2);
        document.add(basicDetailsTable);
    }

    private static void addVenueDetails(Document document, Allocation allocatedCentre, ExamAdministration examAdministration){
        Table venueDetailsTable = new Table(2);
        venueDetailsTable.setPadding(4f);
        venueDetailsTable.setWidth(100f);
        venueDetailsTable.setOffset(10f);
        venueDetailsTable.setBorderWidth(1f);
        venueDetailsTable.setBorderColor(Color.lightGray);

        Time entryTime = Time.valueOf(examAdministration.getExamTime().toLocalTime().minusMinutes(30));

        addRowToTable(venueDetailsTable, "Date of Examination", examAdministration.getExamDate().toString(),1, 0);
        addRowToTable(venueDetailsTable, "Entry Time at centre", entryTime.toString(),2, 0);
        addRowToTable(venueDetailsTable, "Timing of Test", examAdministration.getExamTime().toLocalTime().toString(), 3, 0);
        addRowToTable(venueDetailsTable, "Test centre No", allocatedCentre.getAllocatedCenter(),4, 0);
        addRowToTable(venueDetailsTable, "Venue of Test", allocatedCentre.getAllocatedCity(),5, 0);

        document.add(venueDetailsTable);
    }

    @SneakyThrows
    private static void addDirectorSignature(Document document) {
        Table directorSignTable = new Table(1);
        directorSignTable.setPadding(6f);
        directorSignTable.setWidth(30f);
        directorSignTable.setOffset(10f);
        directorSignTable.setBorderWidth(0f);
        directorSignTable.setBorderColor(Color.lightGray);
        directorSignTable.setHorizontalAlignment(HorizontalAlignment.RIGHT);

        ClassPathResource resource = new ClassPathResource("./images/NTA_director_sign.png");
        byte[] directorSignBytes = resource.getInputStream().readAllBytes();
        Image directorSign = Image.getInstance(resource.getInputStream().readAllBytes());

        directorSign.setAlignment(Image.ALIGN_MIDDLE);
        directorSign.scaleToFit(70f, 70f);
        Cell directorSignCell = new Cell();
        directorSignCell.addElement(directorSign);
        directorSignCell.setBorderWidth(1);
        directorSignCell.setBorderColor(Color.lightGray);
        directorSignCell.setHorizontalAlignment(HorizontalAlignment.LEFT);
        directorSignCell.setVerticalAlignment(VerticalAlignment.BOTTOM);
        directorSignCell.setTop(15f);

        Chunk directorTextChunk = new Chunk("Director NTA", AdmitCardFont.FIELD_VALUE_FONT.getFont());
        Paragraph directorTextParagraph = new Paragraph(directorTextChunk);
        directorTextParagraph.setAlignment(Element.ALIGN_CENTER);

        Cell directorTextCell = new Cell(directorTextParagraph);
        directorTextCell.setBorderWidth(1f);
        directorTextCell.setBorderColor(Color.lightGray);
        directorTextCell.setHorizontalAlignment(HorizontalAlignment.CENTER);
        directorTextCell.setVerticalAlignment(VerticalAlignment.CENTER);

        directorSignTable.addCell(directorSignCell);
        directorSignTable.addCell(directorTextCell);

        document.add(directorSignTable);
    }

    private static void addRowToTable(Table table, String fieldName, String fieldValue, int row, int column){
        Chunk fieldNameChunk = new Chunk(fieldName, AdmitCardFont.FIELD_NAME_FONT.getFont());
        Chunk fieldValueChunk = new Chunk(fieldValue, AdmitCardFont.FIELD_VALUE_FONT.getFont());

        Cell fieldNameCell = AdmitCardUtil.createStyledCell(fieldNameChunk);
        Cell fieldValueCell = AdmitCardUtil.createStyledCell(fieldValueChunk);

        if (row>=7){
            fieldNameCell.setBorderWidth(0f);
            fieldValueCell.setBorderWidth(0f);
        }

        table.addCell(fieldNameCell, row, column);
        table.addCell(fieldValueCell, row, (column+1));
    }

    @SneakyThrows
    private static void addRowToTable(Table table,String imageName, byte[] imageBytes,int row, int column){
        Image image = Image.getInstance(ImageUtil.decompressImage(imageBytes));

        if (imageName.equals("Photograph")){
        image.scaleToFit(70f,100f);
        } else if (imageName.equals("Signature")) {
        image.scaleToFit(100f,70f);
        }

        image.setAlignment(Image.ALIGN_MIDDLE);
        Chunk imageNameChunk = new Chunk(imageName, AdmitCardFont.FIELD_NAME_FONT.getFont());

        Cell imageNameCell = AdmitCardUtil.createStyledCell(imageNameChunk);
        Cell imageCell = AdmitCardUtil.createStyledCell(image);

        if (imageName.equals("Photograph")){
            imageCell.setRowspan(4);

        } else if (imageName.equals("Signature")) {
            imageCell.setRowspan(3);
            imageCell.setHorizontalAlignment(HorizontalAlignment.LEFT);
            imageCell.setVerticalAlignment(VerticalAlignment.BOTTOM);
        }
        table.addCell(imageNameCell, row, column);
        table.addCell(imageCell, row+1, column);
    }

    private static Cell createStyledCell(Element content) {
        Cell cell = new Cell(content);
        cell.setBorderWidth(1);
        cell.setBorderColor(Color.lightGray);
        cell.setHorizontalAlignment(HorizontalAlignment.LEFT);
        cell.setLeft(4f);
        cell.setTop(4f);
        cell.setVerticalAlignment(VerticalAlignment.CENTER);
        return cell;
    }


}
