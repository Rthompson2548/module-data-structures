const Queue = require("./lib/queue");

const binary = (max) => {
  const queue = new Queue();
  // Enqueue the string "1". This represents binary number 1.
  queue.enqueue("1");

  let result = [];

  for (let i = 0; i < max; i++) {
    // Dequeue a value from the queue
    const value = queue.dequeue();

    // Push that value into result
    result.push(value);

    // Append a "0" to the value and enqueue it
    queue.enqueue(value.concat("0"));

    // Append a "1" to the value and enqueue it
    queue.enqueue(value.concat("1"));
  }
  return result;
};

module.exports = binary;