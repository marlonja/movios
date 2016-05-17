package com.movios.models.ModelExceptions;

public class InvalidPasswordException extends Exception {

	private static final long serialVersionUID = 812529152633883L;

	public InvalidPasswordException(String exceptionMessage) {
		super(exceptionMessage);
	}
}
