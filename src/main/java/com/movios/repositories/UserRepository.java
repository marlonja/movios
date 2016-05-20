package com.movios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movios.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, String> {

}