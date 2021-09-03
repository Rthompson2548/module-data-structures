class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // your solution here
    this.top = new Node(value, this.top);
    return this;
  }

  pop() {
    // your solution here
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}

module.exports = Stack;
