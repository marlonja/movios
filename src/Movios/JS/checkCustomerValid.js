var validationApp = angular.module('validationApp', []);

    validationApp.controller('mainController', function($scope, $http) {
        urlBase = "http://localhost:8080/api/users/";

        $scope.submitForm = function() {
            if ($scope.userForm.$valid) {
                    $http.post(urlBase,{
                        address: $scope.user.address,
                        city: $scope.user.city,
                        email: $scope.user.email,
                        password: $scope.user.password,
                        first_name: $scope.user.firstName,
                        last_name: $scope.user.lastName,
                        zip_code: $scope.user.zipCode

                    }).success(function(){
                        alert("Du är redo att logga in");
                        window.location.href = "../index.html"
                        })
                        .error(function() {
                            alert('Error creating data');
                        });

            }

        };


});
