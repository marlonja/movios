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
				   if(list[i].genre == "action"){
					   fillCarTable(list[i]);
					   
				   }
				   
				   
			   }
               
            },
            error: function(jqXHR, textStatus, errorThrown){
                 alert('request failed: '+textStatus);              
            }
        });
    }

	function fillCarTable(movieList) {    
		   
	   $("#listMovies")
		
        .append($('<tr>')
            .append($('<td>')
                .append($('<h4>')      
                                .text("cover")    
                )
            )
            .append($('<td>')
                .append($('<h4>')                             
                                .text(movieList.title) 
                        
                )
            ).append($('<td>')
                .append($('<h4>')                                      
                                .text(movieList.length) 
                            
                )
			 ).append($('<td>')
                .append($('<h4>')                                      
                                .text(movieList.release_year) 
                            
                )
            ).append($('<td>')
                    .append($('<h4>')                      
                                    .text(movieList.genre) 
                    )
            ).append($('<td>')
                    .append($('<h4>')                      
                                    .text(movieList.price) 
                    )
            )
            
        );
    

	}
	
});
	