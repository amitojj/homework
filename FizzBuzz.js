// FizzBuzz Function

// Objective: Implement a function fizzBuzz(n) in JavaScript that prints the numbers from 1 to n. For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". Example: Input: fizzBuzz(5) Output: 1, 2, Fizz, 4, Buzz

//  # using ternary operators
// function fizzBuzz(n) {
//   let output;
//   for (let i = 1; i < n; i++) {
//   (i % 3 === 0 && i % 5 === 0) ? output = "fizzbuzz" :
//   (i % 3 === 0) ? output = "fizz" :
//   (i % 5 === 0) ? output = "Buzz" :
//   output = i;
//   console.log(output);
//   }
// }

//  # using if else
function fizzBuzz(n) {
  for (let i = 1; i < n; i++) {
    let output;
    if (i % 3 === 0 && i % 5 === 0) {
      output = "fizzbuzz";
    } else if (i % 3 === 0) {
      output = "fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i;
    }

    console.log(output);
  }
}

fizzBuzz(20);
