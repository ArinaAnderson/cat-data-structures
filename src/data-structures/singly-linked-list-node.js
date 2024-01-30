class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  getVal() {
    return this.val;
  }

  getNext() {
    return this.next;
  }

  setVal(val) {
    this.val = val;
  }

  setNext(next) {
    this.val = next;
  }
}

export default Node;
