/**
 * Write an algorithm to find whether a linked list has a cycle
 * (i.e., whether a node in the list has its next value pointing
 * to an earlier node in the list). Return true if a cycle is
 * found, false otherwise.
 */

const cycle = (list) => {
  // edge case: if list.size <= 1, return false
  if (!list.head) {
    return false;
    console.log("false: no cycle found");
  }

  // set both pointers at list.head of list
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    // move slow pointer to next node
    slow = slow.next;
    // move fast pointer to node after next node
    fast = fast.next.next;

    if (slow == fast) {
      return true;
      console.log("true: list does have a cycle");
    }
  }
  return false;
  console.log("false: list does not have a cycle");
};

module.exports = cycle;
