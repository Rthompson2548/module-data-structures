const Stack = require("./lib/stack");

const match = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    const character = expression[index];
    const closingBracket = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    // if opening bracket, then push the corresponding closing bracket into stack
    if ("({[".includes(character)) {
      stack.push(closingBracket[character]);
      // if closing bracket, top of the stack must match (then pop) or else brackets are out of order.
    } else {
      if (")}]".includes(character)) {
        if (stack.top?.value === character) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;