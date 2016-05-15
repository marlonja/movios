package com.movios.controllers;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.regex.Pattern;

import static org.junit.Assert.*;

/**
 * Created by Lord Metal on 2016-05-14.
 */
public class MovieYearValidatorTest {
    private static final String YEAR = "1234";

    @Before
    public void setUp() throws Exception {
        String year = "1234";
    }

    @Test
    public void validateYear() throws Exception {
        assertTrue(Pattern.matches("^([0-9]{4})$", YEAR));
    }
    @After
    public void tearDown() throws Exception {

    }
}