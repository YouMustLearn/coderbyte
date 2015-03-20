function ExOh(str) {
  var numX = str.match(/x/g).length;
  var numO = str.match(/o/g).length;

  return numX === numO;

}
