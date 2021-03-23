let userInput = 0
// sets the variable to 0
document.getElementById('button').addEventListener('click', action)
// conects the button to the action
function action () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  // when input is given, the input is stored
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'negative'
    // this will display the message negative if the number is negative
  } else {
    document.getElementById('answer').innerHTML = 'positive'
    // this will display the postive message if the number is positive
  }
}
