var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope){

    var array = [];
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

    $scope.getMoviesByGenre = function(){
        console.log("inne i getMoviesByGenre");
        $http.get(urlBase).success(function(data){
            var list = [];
            for(i = 0; i<data.length; i++){
                if(data[i].genre == "ACTION"){
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

    $scope.checkLogin = function(){
        getEmailFromInput = $scope.email;
        getPasswordFromInput = $scope.password;
        console.log(getEmailFromInput);
        console.log(getPasswordFromInput);
        $http.get(urlUser).success(function(data){

            for(i = 0; i<data.length; i++){
                if(data[i].email == getEmailFromInput && data[i].password == getPasswordFromInput){
                    angular.element(document.getElementById('loggedIn')).append('<p>' + "Välkommen, " + data[i].first_name + '</p>');
                    $scope.showLoginFields = false;
                    $scope.hideLogInTxt = true;
                    $scope.hideCreateAccountTxt = true;
                    $scope.showLogOutTxt = true;
                    break;
                }

            }

        });

    };

    $scope.reloadIndex = function(){
        window.location.reload(false);
    }

    $scope.home = function(){
        $scope.hideContainer = true;
    }

    $scope.addToCart = function(id){
        $('#cartBody').empty();
        array.push(id);
        console.log('You have added a movie to your cart');
        console.log(array);
        angular.element(document.getElementById('cartBody')).append('<p>' + array.length + " varor i din kundkorg" + '</p>');
    }

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
