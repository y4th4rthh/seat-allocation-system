package com.project.SeatManagement.util;

import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;

import java.awt.*;

public enum AdmitCardFont {
    FIELD_NAME_FONT(FontFactory.HELVETICA, 12, Color.BLACK),
    HEADER_FONT(FontFactory.HELVETICA, 16, Color.BLACK),
    SUB_HEADER_FONT(FontFactory.HELVETICA, 14, Color.BLACK),
    FIELD_VALUE_FONT(FontFactory.HELVETICA, 12, Color.DARK_GRAY);

    private final String fontName;
    private final int size;
    private final Color color;

    AdmitCardFont(String fontName, int size, Color color) {
        this.fontName = fontName;
        this.size = size;
        this.color = color;
    }

    public Font getFont() {
        return FontFactory.getFont(fontName, size, color);
    }
}
