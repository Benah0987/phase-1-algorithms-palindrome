function isPalindrome(word) {
  // Write your algorithm here

  function isPalindrome(str) {
    const len = str.length;

    //for loop to traverse thru the strin
    for(let i = 0; i <len/2; i++){
      //seting up conditions
      if (str[i] !==str[len - 1-i]) {
        return false
      }
    }
   
    return true
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(str):
    // Gets the length of the input string.
    len = length of str
    
    // Iterate over the first half of the string.
    for i from 0 to floor(len / 2):
        // Check if the i-th character matches the corresponding character from the end of the string.
        if str[i] != str[len - 1 - i]:
            // If there's a mismatch, the string is not a palindrome.
            return false
    
    // If we made it through the loop without returning false, the string is a palindrome.
    return true

*/

/*
  Add written explanation of your solution here
  This function takes a string as input and returns true if the string is a palindrome 
  (i.e., reads the same backward as forward), and false otherwise.

The function works by iterating over the characters of the string from the beginning and the end at the same time, 
and comparing them. If a mismatch is found, the function immediately returns false. 
If all the characters match, the function returns true.

Note that this implementation assumes that the input string does not contain any non-alphanumeric characters or whitespace. 
If such characters are present, they would need to be removed or ignored before testing for palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
