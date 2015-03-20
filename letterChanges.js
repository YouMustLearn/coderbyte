function LetterChanges(str) {

  // code goes here
  var new_str = "";
  for (var i = 0; i < str.length; i++) {
    if(str[i] == "z") str[i] = "`";
    new_str += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  for (var j = 0; j < new_str.length; j++) {
    if (new_str[j] === "a" || new_str[j] === "e" || new_str[j] === "i" || new_str[j] === "o" || new_str[j] === "u") {
      new_str[j] = new_str[j].toUpperCase();
    }
  }
  return new_str;

}
