let numbers = "Here are the odd numbers 1 thru 100!<br>"
for (let i = 1; i < 101; i++) {
  if ((i % 2) !== 0) {
    numbers += i + "<br>"
  }
}

mainDiv = document.getElementById("main");
mainDiv.innerHTML = numbers;
