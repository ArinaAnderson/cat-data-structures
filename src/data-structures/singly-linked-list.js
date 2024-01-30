class SinglyLinkedList {
  costructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;

      return this.length;
    }

    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return this.length;
  }
}

export default SinglyLinkedList;
