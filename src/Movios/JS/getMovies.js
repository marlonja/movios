var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope, $filter){

    $scope.cart = [];
    $scope.counter = 0;
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
        console.log(genre);
        $http.get(urlBase).success(function(data){
            var list = [];
            for(i = 0; i<data.length; i++){
                if(data[i].genre == genre){
                    list.push(data[i]);
                }
            }

            $scope.moviesByGenre = list;
            console.log(list);
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
        console.log(lastMonth);

        $http.get(urlBase).success(function(data){
            var list = [];
            for (i = 0; i<data.length; i++){
                if(data[i].creation_date > lastMonth){
                    list.push(data[i])
                }
            }
            console.log(list)
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

    $scope.reloadIndex = function(){
        window.location.reload(false);
    }

    $scope.home = function(){
        $scope.hideContainer = true;
    }

    $scope.addToCart = function(movie){
        var found = false;
        $scope.counter++;
        console.log($scope.counter);
        //check quantity -- need to upgrade DB with quantity column!
        $scope.cart.forEach(function(item){
            if(item.id == movie.id){
                item.quantity++;
                found = true;
            }
        });
        if(!found){
            $scope.cart.push(angular.extend({quantity: 1}, movie));

        }

    };

    $scope.removeItemFromCart = function(movie, index){

        if(movie.quantity == 1){
            $scope.cart.splice($scope.cart.indexOf(index), 1);
            $scope.counter -=1;

        }else {
            movie.quantity -=1;
            $scope.counter -=1;
        }

    };

    $scope.addItemFromCart = function(movie){
        if(movie.quantity == 0){
            movie.quantity = 0;
        }else {
            movie.quantity +=1;
            $scope.counter +=1;

        }
    };

    $scope.countHowManyItemsInCart = function(){
        var counter = 0;
        for (i = 0; i < $scope.cart.length; i++){
            counter++;
        }
    }



});
