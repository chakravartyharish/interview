function harmlessransomNote(noteTxt, magazineTxt) {
  var noteArr = noteTxt.split(" ")
  var magazineArr = magazineTxt.split(" ")
  console.log(magazineArr)
  var magazineObj = {}

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word] = magazineObj[word] + 1
    console.log(magazineObj[word])
    
  })

  
  console.log(magazineObj)
  
}

harmlessransomNote("", "this is harish from delhi")