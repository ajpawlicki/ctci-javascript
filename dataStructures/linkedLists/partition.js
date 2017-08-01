class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const partition = (list, num) => {
  let head = list;
  let tail = list;
  
  let node = list;
  let next;

  while (node !== null) {
    next = node.next;

    if (node.value < num) { // attach head to node and make new head
      node.next = head;
      head = node;
    } else { // attach node to tail and make new tail
      tail.next = node;
      tail = node;
    }
    node = next;
  }

  tail.next = null;
  
  return head;
};

const ll = new ListNode(0);
const secondNode = new ListNode(3);
const thirdNode = new ListNode(8);
const fourthNode = new ListNode(2);
const fifthNode = new ListNode(1);
ll.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;
console.log(JSON.stringify(ll));

console.log(JSON.stringify(partition(ll, 3)));

const partition2 = (node, num) => {
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;
  let next;

  while (node !== null) {
    if (node.value < num) {
      if (beforeStart === null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }

    node = node.next;
  }

  if (beforeStart === null) return afterStart;
  afterEnd.next = null;
  beforeEnd.next = afterStart;
  
  return beforeStart;
};

const ll2 = new ListNode(0);
const secondNode2 = new ListNode(3);
const thirdNode2 = new ListNode(8);
const fourthNode2 = new ListNode(2);
const fifthNode2 = new ListNode(1);
ll2.next = secondNode2;
secondNode2.next = thirdNode2;
thirdNode2.next = fourthNode2;
fourthNode2.next = fifthNode2;
console.log(JSON.stringify(ll2));
console.log(JSON.stringify(partition2(ll2, 3)));