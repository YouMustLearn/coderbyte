function ArithGeo(arr) {
  //testing for arithmetic pattern
  var diff = arr[1] - arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      if (arr[i+1] - arr[i] !== diff) break;
    }
    else if (arr[i] === arr[arr.length - 1]) return "Arithmetic";
  }

  //testing for geometric pattern
  var multiplier = arr[1] / arr[0];
  for (var j = 0; j < arr.length; j++) {
    if (j !== arr.length - 1) {
      if (arr[j+1] / arr[j] !== multiplier) break;
    }
    else if (arr[j] === arr[arr.length - 1]) return "Geometric";
  }
  return -1;
}
