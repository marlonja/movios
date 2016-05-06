package com.movios.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.movios.models.UserModel;
import com.movios.services.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userService;

	@CrossOrigin
	@RequestMapping(value = "/users/", method = RequestMethod.POST)
	public void createUser(@RequestBody UserModel userModel) {
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
