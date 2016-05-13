var validationApp = angular.module('validationApp', []);

    validationApp.controller('mainController', function($scope, $http) {
    $scope.submitForm = function() {

        if ($scope.userForm.$valid) {
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

    };

});
