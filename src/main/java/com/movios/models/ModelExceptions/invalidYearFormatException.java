package com.movios.models.ModelExceptions;

/**
 * Created by Lord Metal on 2016-05-14.
 */
public class InvalidYearFormatException extends Exception {

    private static final long serialVersionUID = 812529152633843L;

    public InvalidYearFormatException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
