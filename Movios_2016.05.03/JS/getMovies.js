var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope){

  var urlBase="http://localhost:8080/api/movies/";
 
    $http.get(urlBase).success(function(data){
      $scope.movies = data;   
    });        

    $scope.delete = function(id){
      console.log("jo");
      $http.delete(urlBase+id)
      .then(
        function(response){
          return response.data;
        }
      );
    }
});
