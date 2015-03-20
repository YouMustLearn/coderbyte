function ABCheck(str) {
  //variable to keep count of number of spaces between letters
  var count = 4;
  for (var i = 0, x = str.length; i < x; i++) {
    if (str[i].toLowerCase() === "a") {
      if (str[i+count].toLowerCase() === "b") {
        return true;
      }
    }
  }

  return false;

}
