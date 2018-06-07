function isValidCard() {
  var numberCard = document.getElementById("inputNumber").value;
    
    if (numberCard !== "" && Number.isInteger(parseInt(numberCard))) {
    var arrayNumbers = numberCard.split("");
    arrayNumbers.reverse();
  
    for (i = 1; i < arrayNumbers.length; i += 2) {
      arrayNumbers[i] = arrayNumbers[i] * 2;
      if (arrayNumbers[i] > 9) {
        arrayNumbers[i] = arrayNumbers[i] - 9;
      }  
    }
  
    var sum = 0;
    for (i = 0; i < arrayNumbers.length; i++) {
      sum = sum + arrayNumbers[i];
    }
  
    if (sum % 10 === 0) {
      document.getElementsByClassName("result")[0].innerHTML = "O número do cartão é válido";
    } else {
      document.getElementsByClassName("result")[0].innerHTML = "O número do cartão não é válido";
    }    
  } else {
    document.getElementsByClassName("result")[0].innerHTML = "Digite apenas números.";
  }
  
  return false;

 }
  