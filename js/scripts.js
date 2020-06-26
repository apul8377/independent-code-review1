//Business logic

function replace(userInput) {
  str = [];
  for (i = 0; i <= userInput; i++) {
    str.push(i);
    let newStr = str;
    // if (str.includes(3) == 1) {
    //   str.splice(3, 1, "Won't you be my neighbor?");
    // }
    // if (str.includes(2) == 1) {
    //   str.splice(2, 1, "Beep!");
    // }
    // if (str.includes(1) == 1) {
    //   str.splice(1, 1, "Boop!");
    // }

    return str;
  }
}

//User Interface Logic
$("document").ready(function () {
  $("form#userInput").submit(function (event) {
    event.preventDefault();
    inputValue = $("input#userNumber").val();
    let stringReplaced = replace(inputValue);
    console.log(stringReplaced);
    output = [];
    output += stringReplaced;

    $("#outputText").text(output);
    $("input#userNumber").val(" ");

    if (inputValue >= 999 || inputValue <= 0) {
      $("#outputText").text(
        inputValue + ". Please keep your input between 1-999."
      );
    }
  });
});
