package com.movios.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movios.models.UserModel;
import com.movios.repositories.UserRepository;

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