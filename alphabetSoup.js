function AlphabetSoup(str) {
  var alphSort = function(a,b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    else {
      return 0;
    }
  }
  return str.split("").sort(alphSort).join("");

}
