function legalAge(age){

    if(age >=18){
        console.log("you are an adult");
    } else{
        console.log("you are not an adult");
    }
}

legalAge(69);

function computeGrade(grade){

    if (grade >= 94.5){
        console.log ("1");

    } else if (grade >= 91.5) {
        console.log ("1.25");

    }else if (grade >= 89.5){
        console.log("1.5");

    }else if (grade >= 86.5){
        console.log("1.75");

    } else if(grade >=84.5){
        console.log("2");
    
    }else{
        console.log("Not within the transmutation");
      }
}
comouteGrade(87);

function login(username,password){

    if (username ==="jeff"){
        console.log("welcome user");
   }else {
    console.log("Invalid Login Credentials");
   }
 

    }else { 
    console.log("Invalid User");
    
  //Login("jeff",1234) 
  
  function ticketPrice(age){
    if (age < 18){
        if( age < 5 ){
            console.log("Ticket: Free");

        } else {
            console.log ("Ticket: Child Price");

        }
    }else {
        if (age >=60){
            console.log("Ticket: Senior discount");
        }else {
          console.log("Ticket:Adult Price");
        
    }
  }

}
    }
 
ticketPrice(70);
