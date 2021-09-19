/**
 * Node is used to store values in a LinkedList
 *
 * syntax: head => node => node => ... => null
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkedList class holds a reference to the `head` node.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * The number of elements in the linked list.
   *
   * @returns {number}
   *   the number of elements in the linked list.
   */

  get length() {
    let nodeCount = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return nodeCount;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @returns {*|null}
   *  the first node where `isMatch(node, index) === true`
   * or null if no match is found.
   */
  find(isMatch) {
    let node = this.head;
    let index = 0;

    while (node) {
      if (isMatch(node, index)) {
        return node;
      }
      index++;
      node = node.next;
    }
    return null;
  }

  /**
   * Insert the value after a matched node in the list.
   *
   * @param isMatch
   *  function that returns true if the current node matches the search criteria.
   *
   * @param value
   *  the value to add.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   *
   * @throws 'No match found.'
   *  if list is not empty and no matching element is found.
   */
  insert(value, isMatch = (node, index) => index === this.length - 1) {
    console.log("checking for nodes in linked list...");

    if (this.head) {
      console.log("nodes were found!");

      console.log("checking for requested node");
      const previousNode = this.find(isMatch(value));
      if (!previousNode) {
        console.log("the node you requested does not exist");
        throw Error("requested node not found");
      }
      console.log(`previous node found: ${previousNode}`);

      previousNode.next = new Node(value, previousNode.next);
      console.log(`inserting new node after requested node...`);
      console.log(`insertion completed: ${previousNode.next}`);
    } else {
      console.log(`no nodes present in linked list: setting node as head...`);
      this.insertAtHead(value);
      console.log(`linked list: ${this.head}`);
    }
    console.log(`this: ${this}`);
    return this;
  }

  /**
   * Insert a new value at the head of the list.
   * @param value
   *  the new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */

  insertAtHead(value) {
    // This is a new function that you will need to implement.
  }

  /**
   * Remove the first node where `isMatch(node, index) === true`.
   *
   * @param isMatch
   *  function that returns true if the current node matches the node to be removed.
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained.
   */
  remove(isMatch) {}
}

module.exports = LinkedList;
