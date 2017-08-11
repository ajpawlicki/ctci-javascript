class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (this.stack.length === 0) {
      this.minStack.push(val);
    } else if (this.stack.length > 0) {
      const peekMin = this.minStack[this.minStack.length - 1];

      if (val < peekMin) {
        this.minStack.push(val);
      } else {
        this.minStack.push(peekMin);
      }
    }
    
    this.stack.push(val);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(10);
minStack.push(100);
minStack.push(1);
console.log(minStack);
minStack.pop();