function tipCalc(tipPercentage, initialTotal, numOfPeople) {
  initialTotal = prompt("What is the total? (Please only write the number, example: 50)")
  tipPercentage = prompt("What is the tip percentage? (Example: 5%)")
  numOfPeople = prompt("Split between how many people? (Please enter a number, example: 2)")
  document.write("$"+ Math.round(((((parseFloat(tipPercentage) / 100) * parseInt(initialTotal)) + parseInt(initialTotal)) / parseInt(numOfPeople)) * 100) / 100)
}

tipCalc()