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
  addLL(ll) {
    if (this.head === null) {
      this.head = ll.head;
      this.tail = ll.tail;
    } else {
      this.tail.next = ll.head;
      this.tail = ll.tail;
    }
  }
  printList() {
    console.log(JSON.stringify(this));
  }

  getLength() {
    let size = 0;
    let node = this.head;
    while (node !== null) {
      size++;
      node = node.next;
    }
    return size;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let listA = new LinkedList();
listA.addToTail(69,6,7,12);
let listB = new LinkedList();
let listC = new LinkedList();
listB.addToTail(1000,699,27,1,4,5);
listB.addLL(listA);
listC.addToTail(3,2);
listC.addLL(listA);
listB.printList();
listC.printList();

const findIntersection = (ll1, ll2) => {
  if (ll1.tail !== ll2.tail) return null;

  let ll1Size = ll1.getLength(), ll2Size = ll2.getLength();

  let longer, shorter;
  if (ll1Size > ll2Size) {
    longer = ll1.head;
    shorter = ll2.head;
  } else {
    longer = ll2.head;
    shorter = ll1.head;
  }

  let diff = Math.abs(ll1Size - ll2Size);
  while (diff > 0) {
    diff--;
    longer = longer.next;
  }

  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }
  
  return longer;
};

console.log(findIntersection(listB, listC));
console.log(findIntersection(new LinkedList(), listC));