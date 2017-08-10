class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

const isListPalindrome = function(list) {
  let slow = list;
  let fast = list;
  let beforeMid = null;
  
  while (fast !== null && fast.next !== null) {
    beforeMid = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  if (fast !== null) {
    slow = slow.next;
    beforeMid = beforeMid.next;
  }

  // console.log('slow: ', slow.value);
  // console.log('beforeMid: ', beforeMid.value);
  
  let reversedMid = reverseList(slow);
  let savedReversedMid = reversedMid;
  
  let isPalindrome = true;

  while (reversedMid !== null) {
    if (reversedMid.value !== list.value) {
      isPalindrome = false;
      break;
    }
    
    reversedMid = reversedMid.next;
    list = list.next;
  }

  beforeMid.next = reverseList(savedReversedMid);

  return isPalindrome;
};

const reverseList = (list) => {
  let node = list;
  let prev = null;
  let next;
  
  while (node !== null) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(1);

const ll2 = new ListNode(1);
ll2.next = new ListNode(2);
ll2.next.next = new ListNode(2);
ll2.next.next.next = new ListNode(1);

const ll3 = new ListNode(1);
ll3.next = new ListNode(2);
ll3.next.next = new ListNode(3);

// console.log(isListPalindrome(ll));
// console.log(JSON.stringify(ll));
// console.log(JSON.stringify(ll2));
// console.log(isListPalindrome(ll2));
// console.log(JSON.stringify(ll2));
// console.log(isListPalindrome(ll3));
// console.log(JSON.stringify(ll3));

// console.assert(isListPalindrome(ll) === true);
// console.assert(isListPalindrome(ll2) === true);
// console.assert(isListPalindrome(ll3) === false);

const ll4 = new ListNode(1);
ll4.next = new ListNode(2);
ll4.next.next = new ListNode(3);
ll4.next.next.next = new ListNode(3);
ll4.next.next.next.next = new ListNode(2);
ll4.next.next.next.next.next = new ListNode(1);

console.log(isListPalindrome(ll4));
console.log(JSON.stringify(ll4));