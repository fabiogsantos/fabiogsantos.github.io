$(document).ready(function() {
  
  /*alert("ola mundo");*/
  
  // Focus no primeiro link 
  $("a:first").focus();
    
  $("#btnContraste").click(function(event)
    {
      event.preventDefault(); // pára a ação padrão de um elemento de acontecer.
	  $("body").toggleClass("contraste");
    }	  
  )
  
  $(".readmoreComJQuery").hide();
  
  $(".js-texto a").click(function(event){	          
	event.preventDefault(); // pára a ação padrão de um elemento de acontecer.
	$(this).parents(".js-texto").find(".readmoreComJQuery").slideToggle("slow");
  })  
   
})   