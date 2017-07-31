class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(...values) {
    values.forEach((val) => {
      const newNode = new Node(val);
      
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
    });
  }

  print() {
    console.log(JSON.stringify(this.head));
  }

  KthToLast(k) {
    if (k <= 0) return null;
    let node = this.head, checkAhead = this.head;
    
    // while (checkAhead !== null && k > 0) {
    //   checkAhead = checkAhead.next;
    //   k--;
    // }

    // if (k > 0) return null;

    for (let i = 0; i < k; i++) {
      if (checkAhead === null) return null;
      checkAhead = checkAhead.next;
    }

    while (checkAhead !== null) {
      checkAhead = checkAhead.next;
      node = node.next;
    }

    return node;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const list = new LinkedList();
list.addToTail(1,2,3,4,5);
list.print();
console.log(list.KthToLast(4));