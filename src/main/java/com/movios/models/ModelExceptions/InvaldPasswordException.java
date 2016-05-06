package com.movios.models.ModelExceptions;

public class InvaldPasswordException extends Exception {

	private static final long serialVersionUID = 812529152633883L;

	public InvaldPasswordException(String ExceptionMessage) {
		super(ExceptionMessage);
	}
}
