$(document).ready(function(){

    var rootURL = "http://localhost:8080/api/users/";



    $('#loginBtn').click(function() {
        addUser();
        return false;
    });

	function addUser() {
        console.log('addService');
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: rootURL,
            data: formToJSON(),
            success: function(data, textStatus, jqXHR){
                alert('Login created successfully');
				        window.location.href="index.html";

            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);
            }
        });
    }

	function formToJSON() {
        var jsonString = JSON.stringify({
            "first_name": $('#firstName').val(),
            "last_name": $('#lastName').val(),
      			"email": $('#email').val(),
      			"password": $('#password').val(),
      			"zip_code": $('#zipCode').val(),
      			"city": $('#city').val(),
            "address": $('#address').val()

        });

        console.log(jsonString);
        return jsonString;
    }



});
