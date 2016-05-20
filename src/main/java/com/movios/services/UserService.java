package com.movios.services;

import com.movios.models.UserModel;
import com.movios.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void saveUser(UserModel userModel) {
        userRepository.saveAndFlush(userModel);
    }

    public UserModel readUsers(String email) {
        return userRepository.getOne(email);
    }

    public ArrayList<UserModel> readAllUsers() {
        return (ArrayList<UserModel>) userRepository.findAll();
    }
}