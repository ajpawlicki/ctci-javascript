class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(...values) {
    values.forEach((val) => {
      const newTail = new Node(val);
      if (this.head === null) this.head = newTail;
      if (this.tail !== null) this.tail.next = newTail;
      this.tail = newTail;
    });
  }

  // deleteMiddleNodeNotGood(node) {
  //   if (node === null || node.next === null) return false;

  //   const savedNodeValue = node.value;
  //   let prevNode;
    
  //   while (node.next !== null) {
  //     node.value = node.next.value;
      
  //     prevNode = node;
  //     node = node.next;
  //   }

  //   prevNode.next = null;
  //   this.tail = node;

  //   return savedNodeValue;
  // }

  deleteMiddleNode(node) {
    if (node === null || node.next === null) return null;
    const nodeSavedValue = node.value;

    node.value = node.next.value;
    node.next = node.next.next;

    return nodeSavedValue;
  }

  printList() {
    console.log(JSON.stringify(this.head));
  }
}

const Node = function(value) {
  this.value = value;
  this.next = null;
};

const ll = new LinkedList();
ll.addToTail(1,2,3,4,5);
ll.printList();
console.log(ll.deleteMiddleNode(ll.head.next.next.next));
ll.printList();
console.log(JSON.stringify(ll));