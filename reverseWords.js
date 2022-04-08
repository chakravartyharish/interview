function reverseWords(string) {
  let wordsArr = string.split(" ")
  console.log(wordsArr)
  let reverseWordsArr = []
  wordsArr.forEach((word) => {
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i]
    }
    reverseWordsArr.push(reverseWord)
  })
  return console.log(reverseWordsArr.join(" "))
}

reverseWords("harish kumar Chakravarty")
