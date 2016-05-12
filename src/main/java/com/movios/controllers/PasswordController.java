package com.movios.controllers;

import java.util.regex.Pattern;

import com.movios.models.ModelExceptions.InvaldPasswordException;

public final class PasswordController {

	private PasswordController() {

	}

	public static void validatePassword(String password) {

		boolean passwordHasFailed = false;
		StringBuilder passwordMessageBuilder = new StringBuilder();

		if (passwordLengthShorterThanSix(password)) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password shorter than 6\n");
		} else if (passwordLengthLongerThanTwenty(password)) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password longer than 20\n");
		}

		if (passwordContainsInvalidCharacter(password)) {
			passwordHasFailed = true;
			passwordMessageBuilder.append("Password contains invalid characters\n");
		}

		if (passwordHasFailed) {

			try {
				throw new InvaldPasswordException(passwordMessageBuilder.toString());
			} catch (InvaldPasswordException e) {
				e.printStackTrace();
				// refactor to log?
			}
		}

		return;

	}

	private static boolean passwordLengthShorterThanSix(String password) {

		boolean ShorterThanSix = password.length() < 6;

		return ShorterThanSix;
	}

	private static boolean passwordLengthLongerThanTwenty(String password) {

		boolean LongerThanTwenty = password.length() > 20;

		return LongerThanTwenty;
	}

	private static boolean passwordContainsInvalidCharacter(String password) {

		// \\w = [a-zA-Z_0-9]
		boolean hasInvalidCharacters = Pattern.matches("[\\w[_-]]+", password);

		return !hasInvalidCharacters;
	}

}