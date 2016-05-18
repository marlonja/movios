package com.movios.controllers;

import com.movios.models.ModelExceptions.InvalidYearFormatException;

import java.util.regex.Pattern;

/**
 * Created by Lord Metal on 2016-05-14.
 */

public final class MovieYearValidator {

    private static final String LOG_FILE_NAME = "movie_year_log.txt";

    private MovieYearValidator() {

    }

    public static void validateYear(Integer year) {
        StringBuilder yearMessageBuilder = new StringBuilder();

        if (YearNotFourDigits(year)) {
            yearMessageBuilder.append("Year doesn't contain 4 digits\n");
        } else {
            try {
                throw new InvalidYearFormatException(yearMessageBuilder.toString());
            } catch (InvalidYearFormatException e) {
                GenericLogger.printErrorAndException(LOG_FILE_NAME, yearMessageBuilder.toString(), e);
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