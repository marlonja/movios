package com.movios.controllers;

import com.movios.models.ModelExceptions.InvalidEmailFormatException;

import java.util.regex.Pattern;

/**
 * Created by Lord Metal on 2016-05-15.
 */
public class UserControllerEmailValidator {

    private UserControllerEmailValidator() {

    }

    public static void validateEmail(String email) {
        boolean invalidEmail = false;
        StringBuilder emailMessageBuilder = new StringBuilder();

        if (invalidEmailFormat(email)) {
            invalidEmail = true;
            emailMessageBuilder.append("Not an valid email\n");
        } else {

            try {
                throw new InvalidEmailFormatException(emailMessageBuilder.toString());
            } catch (InvalidEmailFormatException e) {
                e.printStackTrace();
                // refactor to log?
            }
        }
        return;
    }
    private static boolean invalidEmailFormat(String email) {
        boolean invalidEmail;
        String strEmail = email + "";
        String emailPattern =   "^[_A-Za-z0-9-\\+]*" +
                                 "@[A-Za-z0-9-]+" +
                              "(\\.[A-Za-z0-9]+)*$";
        // Email pattern is "string @ string . string" without white spaces.

        if (Pattern.matches(emailPattern, strEmail)) {
            invalidEmail = true;
        } else {
            invalidEmail = false;
        }
        return invalidEmail;
    }
}
