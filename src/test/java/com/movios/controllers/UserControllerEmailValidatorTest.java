package com.movios.controllers;

import org.junit.Test;

import java.util.regex.Pattern;

import static org.junit.Assert.*;

/**
 * Created by Lord Metal on 2016-05-15.
 */
public class UserControllerEmailValidatorTest {
    private static final String EMAIL = "lordmetal@msn.com";

    @Test
    public void validateEmail() throws Exception {

        String emailPattern =   "^[_A-Za-z0-9-\\+]*" +
                                "@[A-Za-z0-9-]+" +
                                "(\\.[A-Za-z0-9]+)*$";
        // Email pattern is "string @ string . string" without white spaces.

        assertTrue(Pattern.matches(emailPattern, EMAIL));
    }
}