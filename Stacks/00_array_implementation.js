class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    const topIndex = this.array.length - 1;
    return this.array[topIndex];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("Amazon");
myStack.push("Google");
console.log(myStack.push("Facebook"));
console.log(myStack.peek());
myStack.pop();
console.log(myStack.pop());
myStack.pop();
console.log(myStack.peek());
