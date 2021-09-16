/**
 * Implement a brute force algorithm for finding the missing number in an array
 */

function missingNumberBruteForce(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let match = true;
    // starts at second item in the array
    for (let j = 1; j <= numbers.length + 1; j++) {
      match = numbers.indexOf(j);
      // indexOf() returns -1 if the item is not present
      if (match === -1) return j;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
  let n = numbers.length + 1;
  let missingNumber = (n * (n + 1)) / 2;

  numbers.forEach((number) => {
    missingNumber -= number;
    console.log("checking for", number, ": found");
  });

  console.log("checking for", missingNumber, ": not found");
  console.log("missing number:", missingNumber);
  return missingNumber;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
