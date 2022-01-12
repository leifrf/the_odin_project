////////////// Plan Template //////////////

// Now that you know what you’re aiming to solve, don’t jump into coding just yet. It’s time to plan out how you’re going to solve it first. Some of the questions you should answer at this stage of the process:

// 1. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
// 2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
// 3. What’s the desired output?
// 4. Given your inputs, what are the steps necessary to return the desired output?

///////////////////////////////////////////////////////////////////////////////

////////////// Example Plan (FizzBuzz) //////////////
// 1. Does your program have an interface? What will it look like? Our FizzBuzz solution will be a command line program, so we don’t need an interface. The only user interaction will be allowing users to enter a number.

// 2. What inputs will your program have? Will the user enter data or will you get input from somewhere else? The user will enter a number from the command line.

// 3. What’s the desired output? The desired output is a list of numbers from 1 to the number the user entered. But each number that is divisible by 3 will output Fizz, each number that is divisible by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz.

// 4. Given your inputs, what are the steps necessary to return the desired output? The algorithm in pseudo code for this problem:

// -When a user inputs a number
// -Loop from 1 to the entered number
// -If the current number is divisible by 3 then print "Fizz"
// -If the current number is divisible by 5 then print "Buzz"
// -If the current number is divisible by 3 and 5 then print "FizzBuzz"
// -Otherwise print the current number

const FizzBuzz = () => {
  let answer = parseInt(
    prompt("Please enter the number you would like to FizzBuzz up to: ")
  );

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz();
