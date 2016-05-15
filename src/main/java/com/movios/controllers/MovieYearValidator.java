package com.movios.controllers;

import com.movios.models.ModelExceptions.invalidYearFormatException;

import java.util.regex.Pattern;
/**
 * Created by Lord Metal on 2016-05-14.
 */

    public final class MovieYearValidator {

    private MovieYearValidator() {

    }

    public static void validateYear(Integer year) {
        boolean invalidYearFormat = false;
        StringBuilder yearMessageBuilder = new StringBuilder();

        if (YearNotFourDigits(year)) {
            invalidYearFormat = true;
            yearMessageBuilder.append("Year doesn't contain 4 digits\n");
        } else {

            try {
                throw new invalidYearFormatException(yearMessageBuilder.toString());
            } catch (invalidYearFormatException e) {
                e.printStackTrace();
                // refactor to log?
            }
        }
        return;
    }
    private static boolean YearNotFourDigits(Integer year) {
        boolean yearNotFourDigits;
        String strYear = year + "";

        // True if 'strYear' contains four digits
        if (Pattern.matches("^([0-9]{4})$", strYear)) {
            yearNotFourDigits = true;
         } else {
            yearNotFourDigits = false;
         }
        return yearNotFourDigits;
    }
}