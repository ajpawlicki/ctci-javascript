class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new NodeList(1);
ll.next = new NodeList(2);
ll.next.next = new NodeList(3);
ll.next.next.next = new NodeList(4);
ll.next.next.next.next = new NodeList(5);

const reverseList = (ll) => {
  let node = ll;
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

console.log(JSON.stringify(reverseList(ll)));