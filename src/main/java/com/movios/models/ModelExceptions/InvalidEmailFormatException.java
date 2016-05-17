package com.movios.models.ModelExceptions;

/**
 * Created by Lord Metal on 2016-05-15.
 */
public class InvalidEmailFormatException extends Exception {

    private static final long serialVersionUID = 812529152633803L;

    public InvalidEmailFormatException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
