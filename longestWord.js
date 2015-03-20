function LongestWord(sen) {

  // code goes here
  var sen_array = sen.split(" ");
  var longest_word = "";
  for (var i in sen_array) {
    sen_array[i] = sen_array[i].replace(/[^a-zA-Z]/g,"");
    if (sen_array[i].length > longest_word.length) {
      longest_word = sen_array[i];
    }
  };

  return longest_word;

}
