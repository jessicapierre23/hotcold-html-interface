/*startover function needs to be outside of hotcold because if it's inside, it's not visible to outside of hotCold, like to button attribute*/

$(document).ready(function() {
	
$('form').submit(function(e){
    e.preventDefault();
	hotCold();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    //why don't i need a preventDefault statement for this though?
        hotCold();
    }
});

});




/*document.getElementById('#userguess').onkeypress = function(e){
    if(!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if(keyCode == '13'){
        return hotCold();
    }
}*/



        
	    function startOver() {
			      ans = Math.floor((Math.random()*50)+1);
				  return hotCold();
			
			   } //close startOver function
		
		function overAll() {
		 ans = Math.floor((Math.random()*50)+1); 
		 /*don't use 'var' in variable declaration so variable can be public and accessible to hotCold function*/
		} //close overAll function
	    
		function hotCold() {
		  
           var gameform = document.getElementById("game");
		   var input = gameform.elements[0].value;//input text box
		      
			  
		      function test(guess) {
			     if (guess == ans) 
				
				  document.getElementById("gamereply").innerHTML = "<p>Correct</p>";
			      
				  
				  else if (guess >= ans + 10 || guess <= ans - 10) 
			      	document.getElementById("gamereply").innerHTML = "<p>Cold</p>";
				  	
				  
				 else if (guess >= ans + 5 || guess <= ans - 5) 
          			document.getElementById("gamereply").innerHTML = "<p>Warm</p>";
				  
				 else 
				 	document.getElementById("gamereply").innerHTML = "<p>Hot</p>";
				}//close test function
				   
			  		   
		   if(isNaN(input)) 
		     	document.getElementById("gamereply").innerHTML = "<p>Please enter a number</p>";
		    
			  
		   else if (input == " ") 
		       	document.getElementById("gamereply").innerHTML = "<p>Please enter a number</p>";
		       
		   else if (/\s+/.test(input)) 
		       	document.getElementById("gamereply").innerHTML = "<p>Don't include any spaces</p>";
		      
		   else if (input < 1 || input > 50) 
		      	document.getElementById("gamereply").innerHTML = "<p>Please enter a number between 1 and 50</p>";
		      
			else test(input);
			/*once input is tested for validity, then the test function is called to determine how hot/cold/warm the guess is*/
		  
		  }//close hotCold function
		  
		  
		  