function PrimeTime(num) {
  if (num < 2) return false;
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;

}
