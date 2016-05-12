$(document).ready(function(){
	console.log('admin');
	var rootURL = "http://localhost:8080/api/movies/2";
	
	  $('#btnAdd').click(function() {
        addMovie();
        return false;
    });
	
	$('#btnDelete').click(function() {
        deleteMovie();
        return false;
    });
	
	$('#btnUpdate').click(function() {
        updateMovie();
        return false;
    });
	
	function deleteMovie() {
        console.log('deleteMovie');
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json',
            //url: rootURL+ $('#delMovie').val(),
			url: rootURL,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Movie removed successfully');
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('request failed: '+textStatus);                
            }
        });
    }
	
	function updateMovie() {
        console.log('updateMovie');
        $.ajax({
            type: 'PUT',
            contentType: 'application/json',
            url: rootURL+ $('#updateMovieId').val(),
            data: formToJSONwithId(),
            success: function(data, textStatus, jqXHR){
                alert('Movie updated successfully');
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);                
            }
        });
    }
	
	
	function addMovie() {
        console.log('addMovie');
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: rootURL,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Movie added successfully');
                
            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);                
            }
        });
    }
	
	function formToJSONwithId() {
        var jsonString = JSON.stringify({
			"id": $('#updateMovieId').val(),
            "format": $('#format').val(),
            "length": $('#length').val(),
            "title": $('#length').val()
        });
 
        console.log(jsonString);
        return jsonString;
    }
	
	 
    function formToJSON() {
        
        var jsonString = JSON.stringify(
		{
			"format": $('#format').val(),
            "length": $('#length').val(),
            "title": $('#length').val()            
        }
		);
 
        console.log(jsonString);
        return jsonString;
    }
	
});
	