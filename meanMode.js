function MeanMode(arr) {
  //finding mode
  var modeObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!modeObj[arr[i]]) modeObj[arr[i]] = 1;
    else modeObj[arr[i]] += 1;
  }

  var mode;
  for (var keys in modeObj) {
    if (modeObj[keys] > modeObj[mode] || mode === undefined) {
      mode = keys;
    }
  }

  //finding mean
  var sum = 0;
  for (var j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  var mean = sum / arr.length;

  return mode == mean ? 1 : 0;

}
