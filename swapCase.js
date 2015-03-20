function SwapCase(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    }
    else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;

}
