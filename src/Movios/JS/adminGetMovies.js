/**
 * Created by Marlon on 2016-05-16.
 */
var app = angular.module('admin', []);
app.controller('mainControl', function($http, $scope){

    var urlBase="http://localhost:8080/api/movies/";

    getAllMovies();

    function getAllMovies(){
        $http.get(urlBase).success(function(data){
            $scope.movies = data;

        });
    };

    $scope.addMovie = function(){
        $http.post(urlBase,{
            title: $scope.addTitle,
            length: $scope.addLength,
            release_year: $scope.addYear,
            synopsis: $scope.addSynopsis,
            genre: $scope.addGenre,
            price: $scope.addPrice

        }).success(function(){
            $scope.addTitle = "";
            $scope.addLength = "";
            $scope.addYear = "";
            $scope.addSynopsis = "";
            $scope.addGenre = "";
            $scope.addPrice = "";
            getAllMovies();
        })
            .error(function() {
                alert('Error creating data');
            });
    }

    $scope.updateMovie = function(movieObj, newTitle, newLength, newYear, newSynopsis, newGenre, newPrice){
        console.log('updateMovie');

        if(newTitle == undefined){
            newTitle = movieObj.title;
        }
        if(newLength == undefined){
            newLength = movieObj.length;
        }
        if(newYear == undefined){
            newYear = movieObj.release_year;
        }
        if(newSynopsis == undefined){
            newSynopsis = movieObj.synopsis;
        }
        if(newGenre == undefined){
            newGenre = movieObj.genre;
        }
        if(newPrice == undefined){
            newPrice = movieObj.price;
        }

        $http.put(urlBase+movieObj.id,{
            id: movieObj.id,
            title: newTitle,
            length: newLength,
            release_year: newYear,
            synopsis: newSynopsis,
            genre: newGenre,
            price: newPrice

        }).success(function(){
            getAllMovies();
        })
    };

    $scope.readMore = function(id) {
        $http.get(urlBase+id).success(function(data){
            $scope.moreInfo = data;

        })
            .error(function(){
                alert('Error loading data');
            });
    };


    $scope.deleteMovie = function(id){
        $http.delete(urlBase+id).success(function(data){
            getAllMovies();
        })
            .error(function() {
                alert('Error loading data');
            });
    };




});
