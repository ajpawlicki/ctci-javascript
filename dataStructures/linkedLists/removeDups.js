class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(...values) {
    values.forEach((value) => {
      let newTail = new ListNode(value);

      if (this.head === null) {
        this.head = this.tail = newTail;
      } else {
        this.tail.next = newTail;
        this.tail = newTail;
      }
    });
  }

  removeHead() {
    let savedHead = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;      
    }

    return savedHead.value;
  }

  removeDups() {
    let currNode, checkNode = this.head, prevNode;
    
    while (checkNode !== null) {
      prevNode = checkNode;
      currNode = checkNode.next;

      while (currNode !== null) {
        if (currNode.value === checkNode.value) {
          if (currNode === this.tail) this.tail = prevNode;

          prevNode.next = currNode.next;
        } else {
          prevNode = prevNode.next;
        }
  
        currNode = currNode.next;
      }

      checkNode = checkNode.next;
    }
  }
};

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

let list = new ListNode(5);
list.next = new ListNode(1);
list.next.next = new ListNode(5);
list.next.next.next = new ListNode(1);
list.next.next.next.next = new ListNode(7);
list.next.next.next.next.next = new ListNode(8);
list.next.next.next.next.next.next = new ListNode(1);
list.next.next.next.next.next.next.next = new ListNode(7);
list.next.next.next.next.next.next.next.next = new ListNode(9);

function removeDups(ll) {
  let hash = new Map();
  let node = ll;
  let prevNode = null;
  while (node !== null) {
    if (hash.get(node.value) === true) {
      prevNode.next = node.next;
    } else {
      hash.set(node.value, true);
      prevNode = node;
    }
    node = node.next;
  }

  console.log(hash);
  
  return ll;
};

// console.log(JSON.stringify(list));
// removeDups(list);
// console.log(JSON.stringify(list));

let linkedList = new LinkedList();
linkedList.addToTail(7);
linkedList.addToTail(6);
linkedList.addToTail(5);
console.log(JSON.stringify(linkedList));
linkedList.addToTail(7);
// console.log(linkedList.removeHead());
// console.log(linkedList.removeHead());
// console.log(linkedList.removeHead());
console.log(JSON.stringify(linkedList));
linkedList.removeDups();
console.log(JSON.stringify(linkedList));