	let cube1 = 0;
    let cube2 = 0;
   
        function player1(){
	    cube1 = Math.random() * 6;
		cube1 = Math.floor(cube1);
        cube1 = cube1 + 1;
        
        document.getElementById('player1').innerHTML = cube1;

        }

       function player2(){

        cube2 = Math.random() * 6;
		cube2= Math.floor(cube2);
        cube2 = cube2 + 1;
        document.getElementById('player2').innerHTML = cube2;
        
        }

    string1 = "Spieler1";
    string2 = "Spieler2";
    draw = "unentschieden";
    counter1 = 0;
    counter2 = 0;
        
    setInterval(function() {

        

        if (document.getElementById('player1') != "" && document.getElementById('player1') != "" ) {
        
        

           if (cube1 > cube2) {
             counter1 = counter1 + 1;
            document.getElementById('won').innerHTML = `${string1} hat ${counter1}-mal gewonnen`;

           }
           if (cube2 > cube1) {
            counter2 = counter2 + 1;

            document.getElementById('won').innerHTML = `${string2} hat ${counter2}-mal gewonnen`;
            
           }
           if (cube1 == cube2) {
            document.getElementById('won').innerHTML = draw;
            
           }

        
        }
         
        
    }, 3000);


       

        
      
  
            
        

		
		

	
	
	
	

	
