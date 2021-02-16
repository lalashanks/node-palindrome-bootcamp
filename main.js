const submit = document.querySelector(".submit")

function palindrome(parameter){
  let inputNoSpace = parameter.replace(/\s/g, '')
  let inputLowercase = inputNoSpace.toLowerCase()
  let reverseInput = inputLowercase.split('').reverse().join('')
  if (reverseInput === inputLowercase){
    console.log("palindrome!")
  }else{
    console.log("not a palindrome")
  }
}

submit.addEventListener('click', () => {
  let input = document.querySelector(".input").value
  palindrome(input)
})
// pseudo code:
/*
Morning Challenge - as you come back from the fire drill
please work on a simple node app that lets a user enter a string.
The app will then let the user know if the string is a palindrome or not.
Please work on this solo at first and we'll move into houses post standup
*/
