const cycle = (list) => {
  if (!list.head) {
    return false;
  }

  let slowPointer = list.head;
  let fastPointer = list.head;

  // confirms 3+ items in list
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    // if both pointers are on the same item
    if (slowPointer == fastPointer) return true;
  }
  return false;
};

module.exports = cycle;
