package com.movios.models.ModelExceptions;

/**
 * Created by johannesklint on 2016-05-23.
 */
public class InvalidYearException extends Exception{

    private static final long serialVersionUID = 812529152633843L;

    public InvalidYearException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
