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
        $scope.foundinStock = false;
        $scope.getGenre = genre;
        $http.get(urlBase).success(function(data){
            var list = [];
            for(i = 0; i<data.length; i++){
                if(data[i].genre == genre && data[i].amount > 0){
                    list.push(data[i]);
                }
            }

            if(list.length == 0) {
                $scope.foundinStock = true;
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
        var boolean = false;
        $http.get(urlUser).success(function(data){

            for(i = 0; i<data.length; i++){
                if(data[i].email == getEmailFromInput && data[i].password == getPasswordFromInput){
                    angular.element(document.getElementById('loggedIn')).append('<p>' + "Välkommen, " + data[i].first_name + '</p>');
                    $scope.showLoginFields = false;
                    $scope.hideLogInTxt = true;
                    $scope.hideCreateAccountTxt = true;
                    $scope.showLogOutTxt = true;
                    $scope.accountShow = true;
                    boolean = false;

                    var user = data[i];
                    $scope.user = user.id;
                    
                    var userObj = data[i];
                    $scope.userObj = userObj;

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

    $scope.updateUserForm = function(user, newFirstName, newLastName, newEmail, newPassword, newAddress, newZipCode, newCity){
        console.log(user);
        
        if(newFirstName == undefined){
            newFirstName = user.first_name;
        }
        if(newLastName == undefined){
            newLastName = user.last_name;
        }
        if(newEmail == undefined){
            newEmail = user.email;
        }
        if(newPassword == undefined){
            newPassword = user.password;
        }
        if(newAddress == undefined){
            newAddress = user.address;
        }
        if(newZipCode == undefined){
            newZipCode = user.zip_code;
        }
        if(newCity == undefined){
            newCity = user.city;
        }

        $scope.userObj.first_name = newFirstName;
        $scope.userObj.last_name = newLastName;
        $scope.userObj.email = newEmail;
        $scope.userObj.password = newPassword;
        $scope.userObj.address = newAddress;
        $scope.userObj.zip_code = newZipCode;
        $scope.userObj.city = newCity;

            $http.put(urlUser+user.id,{
                id: user.id,
                address: newAddress,
                city: newCity,
                email: newEmail,
                password: newPassword,
                first_name: newFirstName,
                last_name: newLastName,
                zip_code: newZipCode

            }).success(function(){

            }).error(function() {
                alert('Error creating data');
            });

    };


    $scope.hideAll = function(){
        $scope.hideContainer = false;
        $scope.moviesLink = false;
        $scope.newsLink = false;
        $scope.aboutLink = false;
        $scope.contactLink = false;
        $scope.cartLink=false;
        $scope.genreLink = false;
        $scope.accountLink = false;
        $scope.updateAccountLink = false;
        $scope.welcomeTxt = true;
    }

    $scope.reloadIndex = function(){
        window.location.reload(false);
    }

    $scope.home = function(){
        $scope.hideContainer = true;
    }

    $scope.addToCart = function(movie){
        var found = false;

        $scope.cart.forEach(function (item) {
            if(item.id == movie.id){
                if(item.quantity >= movie.amount){
                    found = true;
                    alert("Det finns inte fler varor i lagret");

                }else if(item.quantity < movie.amount){
                    $scope.sum += movie.price;
                    $scope.counter++;
                    item.quantity++;
                    found = true;
                }
            }
        });

        if(!found) {
            $scope.cart.push(angular.extend({quantity: 1}, movie));
            $scope.counter++;
            $scope.sum += movie.price;

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
             if(movie.quantity < movie.amount){
                movie.quantity +=1;
                $scope.counter +=1;
                $scope.sum += movie.price;
             }else {
                 alert("Det finns inte fler varor i lagret");
             }
        }
});

