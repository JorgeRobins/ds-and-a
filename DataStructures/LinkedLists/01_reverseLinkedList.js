const { LinkedList } = require("./00_implementation");

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());

// 1: Creating a new LinkedList
function reverse1(linkedList) {
  if (!linkedList.head.next) {
    return linkedList;
  }
  const reverseLinkedList = new LinkedList(linkedList.tail.value);
  for (let i = linkedList.length - 2; i >= 0; i--) {
    reverseLinkedList.append(linkedList.traverseToIndex(i).value);
  }
  return reverseLinkedList;
}
console.log(reverse1(myLinkedList).printList());

// 2: Reversing pointers in existing LinkedList
function reverse2(linkedList) {
  if (!linkedList.head.next) {
    return linkedList;
  }
  let current = linkedList.head;
  let previous = null;
  while (current) {
    let temp = current.next;
    current.next = previous;
    previous = current; // reverse
    current = temp; // loop
  }
  linkedList.head = previous;
  return linkedList;
}
console.log(reverse2(myLinkedList).printList());
