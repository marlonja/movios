$(document).ready(function(){
	
	var rootURL = "http://localhost:8080/api/movies/";
	
	updateTable();
	
	function updateTable() {
       
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: rootURL,
            success: function(data, textStatus, jqXHR){
               
               var list = data;
			   
			   
			   for(i = 0; i<list.length; i++){
				   fillCarTable(list[i]);
				   console.log(i);
			   }
               
            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);              
            }
        });
    }

	function fillCarTable(car) {    
		   
	   $("#listMovies")
		
        .append($('<tr>')
            .append($('<td>')
                .append($('<h4>')      
                                .text(car.title)    
                )
            )
            .append($('<td>')
                .append($('<h4>')                             
                                .text(car.length) 
                        
                )
            ).append($('<td>')
                .append($('<h4>')                                      
                                .text(car.format) 
                            
                )
			 
            )
            
        );
    

	}
	
});
	