var app = angular.module('test', []);
app.controller('mainControl', function($http, $scope, $compile){

  var array = [];
  var urlBase="http://localhost:8080/api/movies/";

  getAllMovies();
  //showCart();
  function getAllMovies(){
    $http.get(urlBase).success(function(data){
      $scope.movies = data; 

    });       
  };

  $scope.addMovie = function(){
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

  $scope.updateMovie = function(movieObj, newTitle, newLength, newYear, newSynopsis, newGenre, newPrice){
	  console.log('updateMovie');

	  if(newTitle == undefined){
		  newTitle = movieObj.title;
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

    $http.put(urlBase+movieObj.id,{
	  id: movieObj.id,
	  title: newTitle,
    length: newLength,
	  release_year: newYear,
	  synopsis: newSynopsis,
	  genre: newGenre,
	  price: newPrice

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
