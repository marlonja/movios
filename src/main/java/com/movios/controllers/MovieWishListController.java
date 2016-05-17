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

import com.movios.models.MovieModel;
import com.movios.models.MovieWishListModel;
import com.movios.services.MovieWishListService;

@RestController
public class MovieWishListController {
    @Autowired
    private MovieWishListService movieWishListService;

    @CrossOrigin
    @RequestMapping(value = "/movieWishList/", method = RequestMethod.POST)
    public void createMovieWishList(@RequestBody MovieWishListModel movieWishListModel) {
        movieWishListService.saveMovieWishList(movieWishListModel);
    }

    @CrossOrigin
    @RequestMapping(value = "/movieWishList/{id}", method = RequestMethod.GET)
    public ResponseEntity<MovieWishListModel> readMovieWishList(@PathVariable Long id) {
        return new ResponseEntity<MovieWishListModel>(movieWishListService.readMovieWishLists(id), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/movieWishList/", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<MovieWishListModel>> getAll() {
        return new ResponseEntity<ArrayList<MovieWishListModel>>(movieWishListService.readAllMovieWishLists(), HttpStatus.OK);
    }
}
