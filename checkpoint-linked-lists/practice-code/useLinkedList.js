const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insert("One");
linkedList.insert(2);

linkedList.insert(1.5, (node) => node.value === "One");

console.log(linkedList);

console.log(
  "find 2",
  linkedList.find((node) => node.value === 2)
);

console.log(
  "find 3",
  linkedList.find((node) => node.value === 3)
);
