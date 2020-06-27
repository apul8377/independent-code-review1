//Business logic

function replace(userInput) {
  const str = [];
  let newStr = [];
  for (i = 0; i <= userInput; i++) {
    str[i] = i.toString();
  }
  if (str.includes("3") || str.includes("2") || str.includes("1")) {
    newStr = str
      .toString()
      .replace(/3*/g, "Won't you be my neighbor?")
      .replace(/2*/g, "Beep!")
      .replace(/1*/g, "Boop!");
  }
  return newStr;
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
