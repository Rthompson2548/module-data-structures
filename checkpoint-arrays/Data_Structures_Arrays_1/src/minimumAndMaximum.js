/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length >= 1) {
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach((number) => {
      if (number < min) {
        min = number;
      }
      if (number > max) {
        max = number;
      }
    });
    return [min, max];
  }
  return [];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
