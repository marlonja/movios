package com.movios.controllers;

import com.movios.models.UserModel;
import com.movios.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.movios.controllers.PasswordController.validatePassword;
import static com.movios.controllers.PasswordHashing.passwordHashingSHA256;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin
    @RequestMapping(value = "/users/", method = RequestMethod.POST)
    public void createUser(@RequestBody UserModel userModel) {

        /*
        String userPassword = userModel.getPassword();

        validatePassword(userPassword);
        userModel.setPassword(passwordHashingSHA256(userPassword));
        */
        userService.saveUser(userModel);
    }

    @CrossOrigin
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserModel> readUser(@PathVariable Long id) {


        return new ResponseEntity<UserModel>(userService.readUsers(id), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/users/", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<UserModel>> getAll() {
        return new ResponseEntity<ArrayList<UserModel>>(userService.readAllUsers(), HttpStatus.OK);
    }
}
