//write your code here
class LinkedList {
  constructor (array) {
    this.head = this.setLinkedList(array);
    this.tail = this.getTail();
  }

  makeNode (data, next = null) {
    let Node = function (data, next) {
      this.data = data;
      this.next = next;
    }
    let node = new Node(data, next);
    return node;
  }

  setLinkedList (array) {
    if (array.length == 0) {
      return null;
    } else { // array have at least one element
      let node = this.makeNode(array[array.length - 1]);
      if (array.length > 1) { // array have more than one element
        for (let i = array.length - 2; i >= 0; i--) {
          node = this.makeNode(array[i], node);
        }
      }
      return node;
    }
  }

  getHead () {
    return this.head;
  }

  getTail () {
    let tail = this.getHead();
    if (tail != null) {
      while (tail.next != null) {
        tail = tail.next;
      }
    }
    return tail;
  }

  getLength () {
    if (!this.getHead()) {
      return 0;
    } else {
      let count = 0;
      let current = this.getHead();
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  }

  isEmpty () {
    return !this.getHead();
  }

  insertDataToTail (data) {
    let node = this.makeNode(data);
    this.tail.next = node;
    this.tail = node;
  }

  insertDataToHead (data) {
    let node = this.makeNode(data);
    node.next = this.head;
    this.head = node;
  }

  deleteDataFromTail () {
    if (!this.isEmpty()) {
      let data = this.tail.data;
      if (!this.head.next) { // List dengan satu elemen
        this.head = null;
        this.tail = null;
      } else {
        let tail = this.head;
        let current = this.head;
        while (current.next) {
          tail = current;
          current = current.next;
        }
        this.tail = tail;
        this.tail.next = null;
      }
      return data;
    } else {
      console.log("The list is empty.");
    }
  }

  deleteDataFromHead () {
    if (!this.isEmpty()) {
      let data = this.head.data;
      this.head = this.head.next;
      return data;
    } else {
      console.log("The list is empty.");
    }

  }

  push (data) {
    this.insertDataToTail(data);
  }

  pop () {
    return this.deleteDataFromHead();
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log("\n");
console.log(list.getHead());
console.log("\n");
console.log(list.getTail());
console.log("\n");
list.push(11);
list.printList();
console.log("\n");
let x = list.pop();
list.printList();
console.log("\n");
console.log(x);
