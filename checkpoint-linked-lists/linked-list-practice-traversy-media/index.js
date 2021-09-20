// represents each individual node
class Node {
  // takes the data ("data") and pointer to next node ("next")
  constructor(data, next = null) {
    // takes data passed in and sets it to the data property
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // sets list as empty by default
    this.head = null;
    // sets size as empty since the list is empty
    this.size = 0;
  }

  // methods for linked list

  // method 1: insert first node (head)
  insertFirst(data) {
    /**
     * "this.head" param is used to set
     * head of list as reference to next
     * node if the list already exists
     *  if the head is null, this will
     *  set the new node to be the head
     */
    this.head = new Node(data, this.head);
    // add to size (number of nodes in list)
    this.size++;
  }

  // method 2: insert last node
  insertLast(data) {
    // create a new node with the provided data
    let node = new Node(data);
    let current;

    // handles case of empty list in which case
    // the new node will be the head and tail
    if (!this.head) {
      this.head = node;
      // handles case that head already exists
    } else {
      current = this.head;
      // while there are values proceeding the head
      // set the current value to the next node
      while (current.next) {
        current = current.next;
      }
      // adds new node to the end, in the case that there
      // is no current.next value
      current.next = node;
    }
    // increase size
    this.size++;
  }

  // method 3: insert at an index
  insertAtIndex(data, index) {
    // edge case: index does not exist
    if (index > 0 && index > this.size) {
      return;
    } else if (index < 0) {
      return;
    }
    // if it is the first index insert the node as the head
    if (index === 0) {
      this.head = new Node(data, index);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to first node
    current = this.head;
    let count = 0;

    // while the current node's index is less than "index"
    while (count < index) {
      // set the current node to be the previous node and add to the count
      previous = current;
      count++;
      // set the next node to be the current node
      current = current.next;
    }
    // take the node we initialized above and set the
    // next value to it's current value
    node.next = current;
    previous.next = node;

    this.size++;
  }

  // method 4: get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log("requested index data:", current.data);
      }
      count++;
      current = current.next;
    }
    // return null if list is empty
    return null;
    console.log("list is empty: cannot find index");
  }

  // method 5: remove at index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    } else if (index < 0) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // remove first index
    if (index == 0) {
      // set the head to be the next node
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    // substract from the size since a node is being removed
    this.size--;
  }

  // method 6: clear list

  // method 6: print list data
  printListData() {
    // represents current node
    let current = this.head;

    // loop through all nodes
    while (current) {
      // if the list data exists, log the data from
      // the head node, then move to next node until the end
      console.log("list data:", current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertLast(400);

// insert data = 500 at index 2
ll.insertAtIndex(500, 2);
// insert data at index that doesn't exist
ll.insertAtIndex(1000, -1);
ll.insertAtIndex(1000, 500);

console.log("linked list:", ll);
console.log(" ");
ll.printListData();

ll.removeAtIndex(1);
// ll.getAtIndex(0);
// ll.getAtIndex(3);
