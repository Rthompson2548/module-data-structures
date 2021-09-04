const Stack = require("./lib/stack");

const evaluate = (expression) => {
  let stack = new Stack();

  // remove all spaces from the expression
  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (!"+-*/".includes(character)) {
      stack.push(parseInt(character));
    }
    if ("+-*/".includes(character)) {
      let a = stack.pop();
      let b = stack.pop();

      const mathMachine = {
        "+": b + a,
        "-": b - a,
        "/": b / a,
        "*": b * a,
      };

      const result = mathMachine[character];

      stack.push(parseInt(result));
    }
  });

  return stack.pop();
};

module.exports = evaluate;