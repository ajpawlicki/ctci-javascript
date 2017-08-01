const ListNode = function(val) {
  this.value = val;
  this.next = null;
};

const ll1 = new ListNode(9);
ll1.next = new ListNode(7);
ll1.next.next = new ListNode(8);

const ll2 = new ListNode(6);
ll2.next = new ListNode(8);
ll2.next.next = new ListNode(5);

const sumLists = (ll1, ll2) => {
  let node = null, sumList = null;
  let carryOver = 0;
  let sum, newNode;

  while (ll1 !== null || ll2 !== null || carryOver === 1) {
    sum = (ll1 !== null ? ll1.value : 0) + (ll2 !== null ? ll2.value : 0);
    newNode = new ListNode(carryOver + (sum % 10)); 

    if (sumList === null) {
      node = sumList = newNode;
    } else {
      node.next = newNode;
      node = node.next;
    }

    if (sum >= 10) {
      carryOver = 1;
    } else {
      carryOver = 0;
    }

    if (ll1 !== null) ll1 = ll1.next;
    if (ll2 !== null) ll2 = ll2.next;
  }

  return sumList;
};

console.log(JSON.stringify(sumLists(ll1,ll2)));