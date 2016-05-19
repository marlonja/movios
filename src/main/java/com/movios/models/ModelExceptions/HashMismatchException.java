package com.movios.models.ModelExceptions;

/**
 * Created by W7 on 2016-05-18.
 */
public class HashMismatchException extends Exception {

    private static final long serialVersionUID = 812529173633801L;

    public HashMismatchException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
