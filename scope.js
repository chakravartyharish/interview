let myName = "harish the 3rd"
function testingScope() {
  myName = "harish"
  if (2 + 2 == 4) {
    myName = "harish Junior"
    console.log(myName)
  }
  console.log(myName)
}

testingScope()
console.log(myName)
