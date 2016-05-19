/**
 * Created by Marlon on 2016-05-16.
 */
var app = angular.module('admin', []);
app.controller('mainControl', function($http, $scope, $filter){

    var urlBase="http://localhost:8080/api/movies/";
    $scope.genres = ["Drama", "Comedy" ,"Action", "Horror", "Fantasy", "Sci-Fi", "Animation"];

    getAllMovies();

    function getAllMovies(){
        $http.get(urlBase).success(function(data){
            $scope.movies = data;

        });
    };

    $scope.submitForm = function(){
        var today = $filter('date')(new Date(),'yyMMdd');
        
        if ($scope.adminForm.$valid) {
            $http.post(urlBase, {
                coverStr: $scope.addCover,
                title: $scope.addTitle,
                length: $scope.addLength,
                release_year: $scope.addYear,
                synopsis: $scope.addSynopsis,
                genre: $scope.selectedGenre.toUpperCase(),
                price: $scope.addPrice,
                amount: $scope.addAmount,
                creation_date: today

            }).success(function(){
                $scope.addTitle = "";
                $scope.addCover = "";
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
    };

    $scope.updateMovie = function(movieObj, newTitle, newCover, newLength, newYear, newSynopsis, newGenre, newPrice, newAmount, newCreationDate){

        if(newTitle == undefined){
            newTitle = movieObj.title;
        }
        if(newCover == undefined){
            newCover = movieObj.coverStr;
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
        if(newAmount == undefined){
            newAmount = movieObj.amount;
        }
        if(newCreationDate == undefined){
            newCreationDate = movieObj.creation_date;
        }

        $http.put(urlBase+movieObj.id,{
            id: movieObj.id,
            coverStr: newCover,
            title: newTitle,
            length: newLength,
            release_year: newYear,
            synopsis: newSynopsis,
            genre: newGenre.toUpperCase(),
            price: newPrice,
            amount: newAmount,
            creation_date: newCreationDate

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
