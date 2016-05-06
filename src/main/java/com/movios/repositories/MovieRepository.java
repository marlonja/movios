package com.movios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movios.models.MovieModel;

public interface MovieRepository extends JpaRepository<MovieModel, Long>{

}