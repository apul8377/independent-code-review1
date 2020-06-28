//Business logic

function replace(userInput) {
  const str = [];
  let newStr = [];
  for (i = 0; i <= userInput; i++) {
    str[i] = i.toString();
  }

  for (let i = 0; i < str.length; i++) {
    let number = str[i];
    if (number.includes("3")) {
      newStr.push("Won't you be my neighbor?");
    } else if (number.includes("2")) {
      newStr.push("Beep!");
    } else if (number.includes("1")) {
      newStr.push("Boop!");
    } else {
      newStr.push(number);
    }
  }
  return newStr;
}

//User Interface Logic
$("document").ready(function () {
  $("form#userInput").submit(function (event) {
    event.preventDefault();
    let inputValue = $("input#userNumber").val();
    let stringReplaced = replace(inputValue);
    console.log(stringReplaced);

    $("#outputText").text(stringReplaced);
    $("input#userNumber").val(" ");

    if (inputValue >= 999 || inputValue <= 0) {
      $("#outputText").text(
        inputValue + ". Please keep your input between 1-999."
      );
    }
  });
});
