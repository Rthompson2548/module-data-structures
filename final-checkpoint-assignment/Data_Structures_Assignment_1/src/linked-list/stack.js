/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    return this.linkedList.insert(value);
  }

  pop() {
    return this.linkedList.remove((node, index) => node.next === null);
  }

  peek() {
    return this.linkedList.find((node, index) => node.next === null).value;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }
}

module.exports = Stack;
