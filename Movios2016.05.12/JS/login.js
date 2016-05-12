$(document).ready(function(){

	var rootURL = "http://localhost:8080/api/users/";

	var getEmailFromInput;
	var getPasswordFromInput;

	$('#loginBtn').click(function() {

		getEmailFromInput = $('#email').val();
		getPasswordFromInput = $('#password').val();
		console.log(getEmailFromInput);

        checkInputs();
        return false;
    });

	function checkInputs() {

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL,
            success: function(data, textStatus, jqXHR){
            	var list = data;
			   	 		console.log('innan for');
			   			for(i = 0; i < list.length; i++){
					   		if(list[i].email == getEmailFromInput && list[i].password == getPasswordFromInput){
									alert('success');
						   		window.location.href="index.html";
									break;
								}else if (list[i].email == "hej") {
									window.location.href="../admin-index.html";
									console.log("halla");
									break;

								}else{
										alert('Wrong input');
										break;
								}



							}


			},
            error: function(jqXHR, textStatus, errorThrown){
							alert("Error request" + errorThrown);
            }
        });
    }






});
