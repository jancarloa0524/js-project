/* Here, I establish all the global variables I will be using in my code. */
// This is a global variable for the number of people that may split a bill (decided by the user!)
var numOfPeople;
//When the page starts, this is set to true so that the while() loop in printAns() runs repeatedly until it is false.
var keepCalc = true;
// This is used in the while() loop for the function function printAns()
var valuesArray = [0];

// Alerts the user to what will happen when they use my calculator, before running the main function of the program
alert('Welcome to my Tip Calculator! This calculator will ask you if you have any more other calculations to make. No calculations will be shown until you type "no" exactly as is. So, do all the calculations you want, but type "no" in the correct prompt when finished.' );
printAns();

// This function is what calculates the total when the user inputs the bill total, tip
function tipCalc(tipPercentage, initialTotal, finalTotal) {
  // The user is first prompted on the initial total of the bill, the tip percentage they want to provide, and by how many people they split the bill
  initialTotal = prompt("What is the total? (Please only write the number, example: 50)");
  tipPercentage = prompt("What is the tip percentage? (Example: 5%)");
  numOfPeople = prompt("Split between how many people? (Please enter a number, example: 2)");
  /* This is one of the most confusing component I was able to create. Let me explain some code here before I get into the math.
  Math.round() as the name suggests, rounds a number. I needed to multiply the final total by 100, round that, and divide by 100, because it would provide the most accurate answer. For example if my total were to be 25.556, multiplying this by 100 would get me 2555.6, which is rounded to 2556. The answer to the Math.round() is then divided by 100 to get the most accurate number possible, 25.56, due to the fact that American dollars doesnt go beyond 2 decimal places. 
  parseFloat() takes the percentage string and essentially removes the percentage, and turns the remaining number in an integer value
  parseInt() is similiar, except it only takes a string and turns it into an integer value, if possible. You'll notice the number 10 in each, this is the radix. It only indicates what kind of number system we are using, such as binary or hexadecimal, but we are using decimals, so it's 10.
  The finalTotal then is equal to the tip divided by 100, multuplied by the initial total, added to the initial total, and then divided by the number of people, all before being rounded up, and divided by 100. This value is then returned for use in the printAns() function*/
  finalTotal = (Math.round(((((parseFloat(tipPercentage) / 100) * parseInt(initialTotal, 10)) + parseInt(initialTotal, 10)) / parseInt(numOfPeople, 10)) * 100) / 100);
  return finalTotal;
}

// This function essentially checks what to do based on the number of people.
function check() {
  // The following is quite simple, when the number of people is equal to 1, the program writes something a little different, compared to if there were more then 1 person.
  if (numOfPeople === "1") {
    document.write("!</span>");
  } else {
    document.write(" of the total!</span>");
  }
}

// This function is very difficult for me to explain, becuase I followed a tutorial on this. But to put it simply, this takes all the values in an array, and adds them together.
function totalArrayValue(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++)
            sum += array[i];

        return sum;
}

// This is the main function of the program, to print the output of the user's inputs, that output being what they owe after tips/bill split are applied
function printAns(total) {
  total = tipCalc();
  // After declaring the variable: total, being equal to the result of the function tipCalc(), it will write down a statement, and use the function check() to figure out it's ending. The total is then also written on the right side of the page. 
  document.write('<span class="printed">You need to pay $' + total);
  check();
  document.write('<span class="array"> $' + total + '</span> <br>');

  // This loops the function itself. More specifically, the code above. It does this until the user responds with "no", in which the function prints the total value of all the other totals. 
  while(keepCalc){
        var userResponse = prompt('Keep calculating? (IF NOT, please type "no")');
        valuesArray.push(total); //everytime the program repeats, the previous value calculated is added to an array. 
        if (userResponse == "no") {
          keepCalc = false;
          // When the user finally answers "no", the calculator displays the total value of everything in the right colomn, which has been put into an array. You'll notice this value is multiplied by 100, rounded, and divided by 100. This is because the final results came out a little wonky sometimes, so this was required to make sure we got the proper value. 
          document.write('<span class="array"> Total = $' + Math.round(totalArrayValue(valuesArray) * 100) / 100 + '</span>');
        } else {
          printAns();
        }
    }

}

