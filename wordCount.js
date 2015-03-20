function WordCount(str) {
  var words = 0;
  for (var i = 0, x = str.length; i < x; i++) {
    if (str[i] === " ") words++;
  }
  return words+1;

}
