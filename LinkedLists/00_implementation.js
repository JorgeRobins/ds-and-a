// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } // O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  } // O(1)

  traverseToIndex(index) {
    // TODO: check params
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // check params
    if (index < 0) {
      return console.log("Cannot have negative index");
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const preNode = this.traverseToIndex(index - 1);
    const postNode = preNode.next;
    preNode.next = newNode; // set leader to point to new node being inserted
    newNode.next = postNode; // set new node to point to following node
    this.length++;
    return this;
  }

  remove(index) {
    // check params
    if (index < 0) {
      return console.log("Cannot have negative index");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else if (index === this.length - 1) {
      this.tail = this.traverseToIndex(index - 1);
    } else {
      const preNode = this.traverseToIndex(index - 1);
      const postNode = preNode.next.next;
      preNode.next = postNode;
    }
    this.length--;
    return this;
  }
}

module.exports = { Node, LinkedList };

// Test Area
// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(0);
// console.log(myLinkedList);
// console.log(myLinkedList.printList());
