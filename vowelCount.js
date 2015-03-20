function VowelCount(str) {
  var vowels = 0;
  for (var i = 0, x = str.length; i < x; i++) {
    if (/[aeiou]/.test(str[i].toLowerCase())) {
      vowels++;
    }
  }
  return vowels;

}
