$(document).ready(function() {
  
  /*alert("ola mundo");*/
  
  $("#btnContraste").click(
	
	function(){
				("html").toggleClass("contraste");
              }	  
  )
  
  $(".readmoreComJQuery").hide();
  
  $(.js-texto a").click(
	
	function(){
				$(".readmoreComJQuery").slidetoogle("slow", 
													function() {
																	alert("pronto!");
															   }
 												   );
			  }
   )  
   
  $("#btnAumentaFonte").click(
  
    function(){
		
				
		
	          }
   
   )
}   