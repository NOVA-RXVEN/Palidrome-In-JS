function palindrome(myString) {
  var input = myString.toLowerCase();
  var reversedInput = input.spilt("").reverse().join("");

  if (input === reversedInput) {
    document.write("<div>" + myString + " is a palindrome <div>");
  } else {
    document.write("<div>" + myString + " is not a palindrome <div>");
  }
}

document.getElementById("result").innerHTML = palindrome("madam");
