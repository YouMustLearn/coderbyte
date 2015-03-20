function TimeConvert(num) {
  var hours, minutes;
  hours = parseInt(num / 60);
  minutes = num % 60;
  return hours + ":" + minutes;

}
   
