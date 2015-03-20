function Palindrome(str) {
  var str = str.split(" ").join("");
  for (var i = 0, x = str.length; i < x; i++) {
    if (str[i] !== str[x-1]) {
      return false;
    }
    x--;
  }
  return true;

}
