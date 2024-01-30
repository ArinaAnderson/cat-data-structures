// task list where new one gets added to the begining of the list
// trip route
// stacks - FIND YOUR WAY BACK
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getNode(idx) {
    if (this.length === 0) {
      return undefined;
    }

    const iter = (count, node) => {
      if (count === idx) {
        return node;
      }

      return iter(count + 1, node.getNext());
    };

    return iter(0, this.head);
  }

  push(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;

      return this.length;
    }

    // this.tail.setNext(node);
    this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const result = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return result;
    }

    const newTail = this.getNode(this.length - 2);
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    return result;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const result = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return result;
    }

    const newHead = result.getNext();
    this.head = newHead;
    this.length -= 1;

    return result;
  }

  unshift(node) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this.length;
    }

    const currentHead = this.head;
    node.setNext(currentHead);
    this.head = node;
    this.length += 1;

    return this.length;
  }
}

export default SinglyLinkedList;
