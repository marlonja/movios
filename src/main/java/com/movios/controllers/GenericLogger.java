package com.movios.controllers;

import java.io.IOException;
import java.util.logging.*;

/**
 * Created by Lordmetal on 2016-05-16.
 */
public class GenericLogger {

    private GenericLogger() {

    }

    public static void printErrorAndException(String logFileName, String errorMessage) {

        Logger logger = Logger.getLogger(GenericLogger.class.getName());

        try {
            FileHandler fileHandler = new FileHandler(logFileName);
            fileHandler.setFormatter(new SimpleFormatter());
            logger.addHandler(fileHandler);

        } catch (IOException e) {
            logger.log(Level.INFO, "File Input/Output-Exception");
        } catch (Exception e) {
            logger.log(Level.WARNING, errorMessage, new Exception());
        }
    }
}