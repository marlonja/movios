package com.movios.controllers;

import org.junit.Test;

import java.util.regex.Pattern;

import static org.junit.Assert.*;

/**
 * Created by Lord Metal on 2016-05-15.
 */
public class UserControllerEmailValidatorTest {
    //private static final String EMAIL = "lordmetal@msn.com";
    private static final String EMAIL = "_@jt.h";

    @Test
    public void validateEmail() throws Exception {

        String emailPattern =   "^[-_.\\w]+" +
                                "@[\\w]+" +
                                "(\\.[\\w]+)+$";
        // Email pattern is "string @ string . string" without white spaces.

        assertTrue(Pattern.matches(emailPattern, EMAIL));
    }
}