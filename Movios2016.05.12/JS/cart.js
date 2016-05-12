$(document).ready(function(){

	var rootURL = "http://localhost:8080/api/movies/2";

	updateTable();

	function updateTable() {

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL,
            success: function(data, textStatus, jqXHR){
			   
				 fillCarTable(data);



            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);
            }
        });
    }

	function fillCarTable(car) {

	   $("#listCarsBody")

        .append($('<tr>')
            .append($('<td>')
                .append($('<h4>')
                                .text(car.id)
                )
            )
            .append($('<td>')
                .append($('<h4>')
                                .text(car.title)

                )
            ).append($('<td>')
                .append($('<h4>')
                                .text(car.synopsis)

                )
			 ).append($('<td>')
                .append($('<h4>')
                                .text("")

                )
            ).append($('<td>')
                    .append($('<h4>')
                                    .text("")
                    )
            )

        );


	}

});
