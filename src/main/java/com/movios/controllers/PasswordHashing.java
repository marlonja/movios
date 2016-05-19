package com.movios.controllers;

import com.movios.models.ModelExceptions.HashMismatchException;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.regex.Pattern;

public class PasswordHashing {

    private static final String LOG_FILE_NAME = "password_log.txt";

    private PasswordHashing() {
    }

    /*
    * Should atleast support the MD2, MD5, SHA-1, SHA-256, SHA-384 and SHA-512 algorithms
    * SHA-256 hash should always contain 64 hex-characters
    */
    public static String passwordHashingSHA256(String password) {

        try {
            MessageDigest crypt = MessageDigest.getInstance("SHA-256");
            crypt.reset();
            crypt.update(password.getBytes("UTF-8"));
            return new BigInteger(1, crypt.digest()).toString(16);

        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        } catch (UnsupportedEncodingException ex) {
            ex.printStackTrace();
        }

        return null;
    }

    public static boolean isSHA256Format(String message) {

        final int sha256Length = 64;
        boolean isValidHashFormat = false;

        boolean hasOnlyValidCharacters = Pattern.matches("[0-9[a-f]]+", message);

        if (message.length() == sha256Length && hasOnlyValidCharacters) {
            isValidHashFormat = true;
        }

        return isValidHashFormat;
    }

    public static void validatePassword(String message, String hashedValue) {

        boolean isValid = passwordHashingSHA256(message).equals(hashedValue);
        if (!isValid) {
            try {
                throw new HashMismatchException("The hashed password didn't match with the stored hashed password\n");
            } catch (HashMismatchException e) {
                GenericLogger.printErrorAndException(LOG_FILE_NAME, "Password mismatch", e);
            }
        }
        return;
    }
}
