// const testVar = {}

// function testFunc() {
//   return "hi"
// }

superbowlWin = (array) => {
  const winner = array.find(element => element.result === "W")
  return winner ? winner.year : winner
}