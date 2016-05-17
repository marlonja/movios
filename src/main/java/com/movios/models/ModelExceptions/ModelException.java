package com.movios.models.ModelExceptions;

/**
 * Created by Lordmetal on 2016-05-17.
 */
@Deprecated
public abstract class ModelException extends Exception {

    protected ModelException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
