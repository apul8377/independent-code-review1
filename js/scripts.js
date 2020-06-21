//Business logic
output= []; 
let str = 0;
let newStr = 0;

  function replace() {
    if (str.includes(3) == 1) {
      newStr = str.replace(str, ' Wont you be my neighbor? ');
    } else if (str.includes(2) == 1) {
      newStr = str.replace(str, ' Boop!');
    } else if (str.includes(1) == 1) {
      newStr = str.replace(str, ' Beep!');
    } else {
      newStr = str;
    }
  }
  


  //User Interface Logic      
  $("document").ready(function() {
    $("form#userInput").submit(function(event) {
      event.preventDefault();
      let inputValue = $("input#userNumber").val();
      for (i = 0; i <= inputValue; i++) {
        str = i.toString();
          replace();
        output += newStr; 
        
          
          $("#outputText").text(output);
          $("input#userNumber").val(" ");
      }
       if (inputValue >= 999 || inputValue <= 0) {
          $("#outputText").text(inputValue + ". Please keep your input between 1-999.");
        }
      output = " ";
      
      
      });
    });
  

  
