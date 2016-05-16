package tdd;

import static org.junit.Assert.fail;

import java.util.regex.Pattern;

import org.junit.Test;

/*
 * password must satisfy every constraint
 * 1. Must be longer or equal to 6, and less or equal to 20
 * 2. Can only contain upper, lower and numeric characters plus the set:_-
 */

public class UserModelPasswordTest {

    private static final String SHORT_PASSWORD = "12345";
    private static final String LONG_PASSWORD = "123456789012345678901";
    private static final String CHARACTERISTIC_PASSWORD = "d13abf*cfABC-_-";

    @Test
    public void passwordLongerThanTwenty() {

        boolean longerThanTwenty = LONG_PASSWORD.length() > 20;
        if (longerThanTwenty) {
            // nothing happens if the test succeded
        } else {

            fail("Password was longer than 20 characters");
        }
        return;
    }

    @Test
    public void passwordLessThanSix() {

        boolean lessThanSix = SHORT_PASSWORD.length() < 6;
        if (lessThanSix) {
            // nothing happens if the test succeded
        } else {
            fail("Password was shorter than 6 characters");
        }

        return;
    }

    @Test
    public void passwordContainsInvalidCharacter() {

        // \\w = [a-zA-Z_0-9]
        boolean hasInvalidCharacters = Pattern.matches("[\\w[_-]]+", CHARACTERISTIC_PASSWORD);
        if (!hasInvalidCharacters) {
            // nothing happens if the test succeded
        } else {
            fail("Password contains invalid character(s)");
        }
        return;
    }

}