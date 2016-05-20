package com.movios.models.ModelExceptions;

public class InvalidYearFormatException extends Exception {


    private static final long serialVersionUID = 812529152633843L;

    public InvalidYearFormatException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
