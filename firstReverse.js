function FirstReverse(str) {

  // code goes here
  var new_string = "";
  for (var i = 0; i < str.length; i++) {
    new_string = str[i] + new_string;
  }
  str = new_string;

  return str;

}
