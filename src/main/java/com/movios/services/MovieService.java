package com.movios.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movios.models.MovieModel;
import com.movios.repositories.MovieRepository;

@Service
public class MovieService {
	@Autowired
	private MovieRepository movieRepository;

	public void saveMovie(MovieModel movieModel) {
		movieRepository.saveAndFlush(movieModel);
	}

	public MovieModel readMovie(Long id) {
		return (MovieModel) movieRepository.getOne(id);
	}

	public ArrayList<MovieModel> readAllMovies() {
		return (ArrayList<MovieModel>) movieRepository.findAll();
	}
	
	public void deleteMovie(Long id){
		movieRepository.delete(id);
	}
}