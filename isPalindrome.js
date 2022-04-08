function caeserCipher() {}

// function isPalindrome(string) {
//   string = string.toLowerCase()
//   var newString = ""
//   for (i = 0; i < string.length; i++) {
//     if (string[i] == "") {
//       newString += string[i]
//     }
//   }
//   var reversedNewString = newString.split("").reverse().join("")
//   return console.log(newString === reversedNewString)
// }

// function isPalindrome(string) {
//   string = string.toLowerCase()
//   var charactersArr = string.split("")
//   var validCharactersArr = "abcdefghijklmnopqrstuvwxyz".split("")
//   lettersArr = []
//   charactersArr.forEach(char => {
//     if (validCharactersArr.indexOf(char) > -1) lettersArr.push(char)
//   });

//   if(lettersArr.join("") === lettersArr.reverse().join("")) return true
//   else return false
// }

isPalindrome("race   car")
