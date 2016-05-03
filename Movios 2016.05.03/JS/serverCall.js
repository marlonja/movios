var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope){

  var urlBase="http://localhost:8080/api/movies/";
 
        $http.get(urlBase).success(function(data){
          $scope.title = data;   
        });        
});
