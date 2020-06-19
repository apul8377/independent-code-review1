//User Interface Logic
$("document").ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    let inputValue = $("input#userNumber").val();
    for(i = 0; i <= inputValue; i++){
      let makeString = i.toString();
      makeString = makeString.replace("3", " Won't you be my neighbor? ").replace("2", "Boop! ").replace("1", "Beep! ");
        console.log(makeString);
        if(inputValue >= 999 || inputValue < 1){
          $("#outputText").text(inputValue + ". Please keep your input between 1-999.");
        }else{
      $("#outputText").text(makeString);
        }
      $("input#userNumber").val(" ");
      }
  });
});
