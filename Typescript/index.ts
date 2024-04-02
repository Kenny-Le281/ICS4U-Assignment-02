/*
* This program blows up a string into letters
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-29
*/


import { createPrompt } from 'bun-promptx'

function isDigit(char: string): boolean {
  return !isNaN(parseInt(char));
}


function blowUp(userInput) {
    let newString = ""

    for (let counter1 = 0; counter1 < userInput.length; counter1++) {
        // Checks if value is a digit
        if (isDigit(userInput[counter1])) {
            // Checks if next digit is also a number
            if (isDigit(userInput[counter1 + 1])) { 
              // If yes it ignores the previous number
              continue 
            }
            else {
              // Multiplies letters by their respected values
              let mulitplier = parseInt(userInput[counter1])
              for (let counter2 = 0; counter2 < mulitplier; counter2++) {
                // Appends characters to a new string
                newString += userInput[counter1 + 1] 
              }
          }
        }
      else { // If it isn't go to the next value
        continue 
      }
    }
    return newString
}

while (true) {
  const userInput = prompt("Enter a String that you want to blow up: ");
  if (userInput.value !== null) {
    const finalString = blowUp(userInput)
    console.log(`The blown up string is: ${finalString}`)
  } else {
    console.log('Invalid Input')
    break
  }
}

console.log('\nDone.')
