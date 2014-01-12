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
				  /*in this html interface version of hotcold, it seems that pressing the reset button does "make extra calls to the server" because the page reloads. It does not do that in the hotcold game that uses the alert and prompt functions. How can I fix this, if that is the case?*/
			   } //close startOver function
		
		function overAll() {
		 ans = Math.floor((Math.random()*50)+1); 
		 /*don't use 'var' in variable declaration so variable can be public and accessible to hotCold function*/
		} //close overAll function
	    
		function hotCold() {
		  //var ans = Math.floor((Math.random()*50)+1);
           var gameform = document.getElementById("game");
		   var input = gameform.elements[0].value;//input text box
		      
			  
		      function test(guess) {
			     if (guess == ans) 
				  /*document.write("Correct"); I tried to do this for all the 
				  if and else if statements, but document.write takes the program to a new page; why can't it just be added to current content? is that just how it is? 
				  It also seems that using alert in these places didn't work either like it did in the hot/cold game that uses the prompt and alert functions. Is alert function not ideal for the html-interface version of the hot/cold game? */
				  
				  document.getElementById("gamereply").innerHTML = "<p>Correct</p>" + ans;
			      
				  
				  else if (guess >= ans + 10 || guess <= ans - 10) 
			      	document.getElementById("gamereply").innerHTML = "<p>Cold</p>"  + ans;
				  	
				  
				 else if (guess >= ans + 5 || guess <= ans - 5) 
          			document.getElementById("gamereply").innerHTML = "<p>Warm</p>"  + ans;
				  
				 else 
				 	document.getElementById("gamereply").innerHTML = "<p>Hot</p>"  + ans;
				}//close test function
				   
			  		   
		   if(isNaN(input)) 
		     	document.getElementById("gamereply").innerHTML = "<p>Please enter a number</p>"  + ans;
		    
			  
		   else if (input == " ") 
		       	document.getElementById("gamereply").innerHTML = "<p>Please enter a number</p>"  + ans;
		       
		   else if (/\s+/.test(input)) 
		       	document.getElementById("gamereply").innerHTML = "<p>Don't include any spaces</p>"  + ans;
		      
		   else if (input < 1 || input > 50) 
		      	document.getElementById("gamereply").innerHTML = "<p>Please enter a number between 1 and 50</p>"  + ans;
		      
			else test(input);
			/*once input is tested for validity, then the test function is called to determine how hot/cold/warm the guess is*/
		  
		  }//close hotCold function
		  
		  
		  