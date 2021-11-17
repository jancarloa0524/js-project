alert("Welcome to my Tip Calculator!");
var numOfPeople
printAns();
check();

function tipCalc(tipPercentage, initialTotal, finalTotal) {
  initialTotal = prompt("What is the total? (Please only write the number, example: 50)");
  tipPercentage = prompt("What is the tip percentage? (Example: 5%)");
  numOfPeople = prompt("Split between how many people? (Please enter a number, example: 2)");
  finalTotal = (Math.round(((((parseFloat(tipPercentage) / 100) * parseInt(initialTotal)) + parseInt(initialTotal)) / parseInt(numOfPeople)) * 100) / 100)
  return finalTotal;
}

function check() {
  console.log(numOfPeople)
  if (numOfPeople === "1") {
    document.write("!")
  } else {
    document.write(" of the total!")
  }
}

function printAns() {
  document.write("You need to pay $" + tipCalc())
}