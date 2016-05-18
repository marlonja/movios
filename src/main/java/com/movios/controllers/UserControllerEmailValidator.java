package com.movios.controllers;

import com.movios.models.ModelExceptions.InvalidEmailFormatException;

import java.util.regex.Pattern;

/**
 * Created by Lord Metal on 2016-05-15.
 */
public class UserControllerEmailValidator {

    private static final String LOG_FILE_NAME = "email_log.txt";

    private UserControllerEmailValidator() {

    }

    public static void validateEmail(String email) {
        StringBuilder emailMessageBuilder = new StringBuilder();

        if (invalidEmailFormat(email)) {
            emailMessageBuilder.append("Invalid email format\n");
        } else {

            try {
                throw new InvalidEmailFormatException(emailMessageBuilder.toString());
            } catch (InvalidEmailFormatException e) {
                GenericLogger.printErrorAndException(LOG_FILE_NAME, emailMessageBuilder.toString(), e);
            }
        }
        return;
    }

    private static boolean invalidEmailFormat(String email) {
        boolean invalidEmail;
        String strEmail = email + "";
        String emailPattern = "^[-_.\\w]+" +
                "@[\\w]+" +
                "(\\.[\\w]+)+$";
        // Email pattern is "string @ string . string" without white spaces.

        if (Pattern.matches(emailPattern, strEmail)) {
            invalidEmail = true;
        } else {
            invalidEmail = false;
        }
        return invalidEmail;
    }
}
