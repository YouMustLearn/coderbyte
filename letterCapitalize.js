function LetterCapitalize(str) {
  var strArray = str.split(" ");
  for (var i = 0, x = strArray.length; i < x; i++) {
    var lenStr = strArray[i].length;
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1,lenStr);
  }
  return strArray.join(" ");

}
