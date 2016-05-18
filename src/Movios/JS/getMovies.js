var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope, $filter){

    $scope.cart = [];
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

            $scope.actionMovies = list;
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
        console.log("addToCart func")
        var found = false;

        //check quantity -- need to upgrade DB with quantity column!
        $scope.cart.forEach(function(item){
            if(item.id == movie.id){
                item.quantity++;
                found = true;
            }
        });
        if(!found){
            $scope.cart.push(angular.extend({quantity: 1}, movie));
            console.log($scope.cart)
        }
    };

    $scope.showCart = function(){
        console.log(array);
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            $http.get(urlBase+array[i]).success(function(data){

                sum += parseInt(data.price);
                var strAppendClick = "<td><button ng-> hej </button></td>";
                //  var compiledstrAppendClick = $compile(strAppendClick);
                $scope.sumScope = sum;
                angular.element(document.getElementById('showMoviesInCart')).append('<tr><td>' + data.title +
                    '<td>'+ data.price + '</td>');
                //  compiledstrAppendClick);
            });
        }
    };

    $scope.removeItemFromCart = function(){
        console.log("hej");
    };

    $scope.addItemFromCart = function(){
        $scope.movieCount = array.length+1;
    };



});
