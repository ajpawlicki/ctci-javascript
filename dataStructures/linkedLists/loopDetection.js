class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(...values) {
    values.forEach((value) => {
      let newTail = new Node(value)

      if (this.head === null) {
        this.head = this.tail = newTail;
      } else {
        this.tail.next = newTail;
        this.tail = newTail;
      }
    })
  }
  printList() {
    console.log(JSON.stringify(this));
  }

  loopDetection() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) break;
    }

    if (fast === null || fast.next === null) return null;
    
    slow = this.head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return fast;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

const ll1 = new LinkedList();
ll1.addToTail(1,2,3,4);
ll1.printList();
console.log(ll1.loopDetection());

const ll2 = new LinkedList();
ll2.addToTail(1);
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
ll2.head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeA;
console.log(ll2.loopDetection());