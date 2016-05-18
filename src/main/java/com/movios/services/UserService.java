package com.movios.services;

import java.util.ArrayList;

import com.movios.models.MovieModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.movios.models.UserModel;
import com.movios.repositories.UserRepository;

import static com.movios.controllers.PasswordHashing.passwordHashingSHA256;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public void saveUser(UserModel userModel) {
		userRepository.saveAndFlush(userModel);
	}

	public UserModel readUsers(Long id) {
		return (UserModel) userRepository.getOne(id);
	}

	public ArrayList<UserModel> readAllUsers() {
		return (ArrayList<UserModel>) userRepository.findAll();
	}
}