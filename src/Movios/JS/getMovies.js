var app = angular.module('moviosApp', []);
app.controller('mainControl', function($http, $scope, $filter){

    $scope.cart = [];
    $scope.counter = 0;
    $scope.sum = 0;
    var getEmailFromInput;
    var getPasswordFromInput;
    var urlBase="http://localhost:8080/api/movies/";
    var urlUser="http://localhost:8080/api/users/";
    getAllMovies();

    function getAllMovies(){
        $http.get(urlBase).success(function(data){
                $scope.movies = data;
        });
    };

    $scope.getMoviesByGenre = function(genre){
        $scope.found = false;
        $scope.getGenre = genre;
        $http.get(urlBase).success(function(data){
            var list = [];
            for(i = 0; i<data.length; i++){
                if(data[i].genre == genre && data[i].amount > 0){
                    list.push(data[i]);
                }
            }

            if(list.length == 0) {
                $scope.found = true;
            }
            $scope.moviesByGenre = list;
        });
    };

    $scope.readMore = function(id) {
        $http.get(urlBase+id).success(function(data){
            $scope.moreInfo = data;

        })
            .error(function(){
                alert('Error loading data');
            });
    };

    $scope.newsMovies = function () {
        var today = $filter('date')(new Date(),'yyMMdd');
        var lastMonth = today-100;

        $http.get(urlBase).success(function(data){
            var list = [];
            for (i = 0; i<data.length; i++){
                if(data[i].creation_date > lastMonth){
                    list.push(data[i])
                }
            }
            $scope.moviesByNews = list;
        }).error(function(){
                alert('Error loading data');
            });
    }

    $scope.checkLogin = function(){
        getEmailFromInput = $scope.email;
        getPasswordFromInput = $scope.password;
        console.log(getEmailFromInput);
        console.log(getPasswordFromInput);
        var boolean = false;
        $http.get(urlUser).success(function(data){

            for(i = 0; i<data.length; i++){
                if(data[i].email == getEmailFromInput && data[i].password == getPasswordFromInput){
                    angular.element(document.getElementById('loggedIn')).append('<p>' + "Välkommen, " + data[i].first_name + '</p>');
                    $scope.showLoginFields = false;
                    $scope.hideLogInTxt = true;
                    $scope.hideCreateAccountTxt = true;
                    $scope.showLogOutTxt = true;
                    boolean = false;
                    break;
                }else{
                    boolean = true;
                }



            }
            if(boolean){
                alert("Inloggning misslyckades, försök igen");
            }

        });

    };

    $scope.hideAll = function(){
        $scope.hideContainer = false;
        $scope.moviesLink = false;
        $scope.actionLink = false;
        $scope.dramaLink = false;
        $scope.animationLink = false;
        $scope.comedyLink = false;
        $scope.fantasyLink = false;
        $scope.horroLink = false;
        $scope.scifiLink = false;
        $scope.newsLink = false;
        $scope.aboutLink = false;
        $scope.contactLink = false;
        $scope.cartLink=false;
        $scope.genreLink = false;
    }

    $scope.reloadIndex = function(){
        window.location.reload(false);
    }

    $scope.home = function(){
        $scope.hideContainer = true;
    }

    $scope.addToCart = function(movie){
        var found = false;
        $scope.counter++;
        $scope.sum += movie.price;

        $scope.cart.forEach(function (item) {
            if(item.id == movie.id){
                item.quantity++;
                found = true;
            }
        });
        if(!found) {
            $scope.cart.push(angular.extend({quantity: 1}, movie));
        }
    };

    $scope.removeItemFromCart = function(movie, index){

        if(movie.quantity == 1){
            $scope.cart.splice(index, 1);
            $scope.quantity = 0;
            $scope.counter -=1;
            $scope.sum -= movie.price;

        }else {
            movie.quantity -=1;
            $scope.counter -=1;
            $scope.sum -= movie.price;

        }

    };

    $scope.increaseItemToCart = function(movie){
        if(movie.quantity == 0){
            movie.quantity = 0;
        }else {
            movie.quantity +=1;
            $scope.counter +=1;
            $scope.sum += movie.price;


        }
    };

});

