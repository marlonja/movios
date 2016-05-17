package com.movios.controllers;

import java.io.IOException;
import java.util.logging.*;

/**
 * Created by Lordmetal on 2016-05-16.
 */
public class GenericLogger {

    private GenericLogger() {

    }

    public static void printErrorAndException(String logFileName, String errorMessage, Exception exception) {

        Logger logger = Logger.getLogger(GenericLogger.class.getName());
        final boolean APPEND = true;
        FileHandler fileHandler = null;

        try {
            fileHandler = new FileHandler(logFileName, APPEND);
            fileHandler.setFormatter(new SimpleFormatter());
            logger.addHandler(fileHandler);
            throw exception;

        } catch (IOException io) {
            logger.log(Level.INFO, "", io);
        } catch (Exception ex) {
            logger.log(Level.WARNING, errorMessage, ex);
        } finally {
            fileHandler.flush();
            fileHandler.close();
        }
    }
}