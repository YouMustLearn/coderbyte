function DivisionStringified(num1,num2) {
  var divResult = Math.round(num1 / num2);
  divResult = divResult.toString().split("");
  for (var i = divResult.length - 3; i > 0; i -= 3) {
    divResult.splice(i, 0, ",");
  }

  return divResult.join("");

}
