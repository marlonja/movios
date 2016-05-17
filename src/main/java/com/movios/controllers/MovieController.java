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
import com.movios.services.MovieService;

@RestController
public class MovieController {
    @Autowired
    private MovieService movieService;

    public MovieService getMovieService() {
        return movieService;
    }

    @CrossOrigin
    @RequestMapping(value = "/movies/", method = RequestMethod.POST)
    public void createMovie(@RequestBody MovieModel movieModel) {
        movieService.saveMovie(movieModel);
    }


    @CrossOrigin
    @RequestMapping(value = "/movies/{id}", method = RequestMethod.GET)
    public ResponseEntity<MovieModel> readMovie(@PathVariable Long id) {
        return new ResponseEntity<MovieModel>(movieService.readMovie(id), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/movies/", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<MovieModel>> getAll() {
        return new ResponseEntity<ArrayList<MovieModel>>(movieService.readAllMovies(), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/movies/{id}", method = RequestMethod.DELETE)
    public void deleteMovie(@PathVariable Long id) {
        movieService.deleteMovie(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/movies/{id}", method = RequestMethod.PUT)
    public void updateMovie(@PathVariable Long id, @RequestBody MovieModel movieModel) {
        movieService.saveMovie(movieModel);
    }
}
