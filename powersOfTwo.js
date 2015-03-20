function PowersofTwo(num) {
  if (num == 1) return true;
  else if (num < 1) return false;
  return PowersofTwo(num / 2);

}
