package com.movios.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movios.models.MovieWishListModel;
import com.movios.repositories.MovieWishListRepository;

@Service
public class MovieWishListService {
	@Autowired
	private MovieWishListRepository movieWishListRepository;

	public void saveMovieWishList(MovieWishListModel movieWishListModel) {
		movieWishListRepository.saveAndFlush(movieWishListModel);
	}

	public MovieWishListModel readMovieWishLists(Long id) {
		return (MovieWishListModel) movieWishListRepository.getOne(id);
	}

	public ArrayList<MovieWishListModel> readAllMovieWishLists() {
		return (ArrayList<MovieWishListModel>) movieWishListRepository.findAll();
	}
}