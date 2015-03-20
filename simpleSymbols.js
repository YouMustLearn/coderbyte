function SimpleSymbols(str) {
  var satisfyCondition;
  for (var i = 0, x = str.length; i < x; i++) {
    if (/[a-z]/.test(str[i].toLowerCase())){
      if (str[i-1] === "+" && str[i+1] === "+") {
        satisfyCondition = true;
      }
      else {
        return false;
      }
    }
  }

  return satisfyCondition;

}
