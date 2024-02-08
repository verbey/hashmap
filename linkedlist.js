class Node {
	constructor(element, previousNode, nextNode) {
		this.element = element;
		this.previousNode = previousNode;
		this.nextNode = nextNode;
	}
}

class LinkedList {
	push(element) {
		const node = new Node(element, null, null);
		if (!this.head) this.head = node;
		if (!this.tail) this.tail = node;
		else {
			node.previousNode = this.tail;
			this.tail.nextNode = node;
			this.tail = node;
		}
	}

	pop() {
		let removedNode;
		if (this.tail) {
			removedNode = this.tail;
			if (removedNode.previousNode !== null) this.tail = removedNode.previousNode;
			else {
				this.tail = null;
				this.head = null;
			}
		}
		return removedNode?.element;
	}

	shift() {
		let removedNode;
		if (this.head) {
			removedNode = this.head;
			if (removedNode.nextNode !== null) {
				this.head = removedNode.nextNode;
				this.head.previousNode = null;
			}
			else {
				this.head = null;
			}
		}

		return removedNode?.element;
	}

	unshift(element) {
		const node = new Node(element, null, this.head);
		if (!this.head) {
			this.head = node;
			this.tail = node;
			node.nextNode = null;
			node.previousNode = null;
		}
		else {
			node.nextNode = this.head;
			this.head.previousNode = node;
			this.head = node;
		}
	}

	delete(element) {
		if (this.head) {
			let nextNode = this.head;
			while (nextNode) {
				if (nextNode.element === element) {
					if (nextNode.previousNode && nextNode.nextNode) {
						nextNode.previousNode.nextNode = nextNode.nextNode;
						nextNode.nextNode.previousNode = nextNode.previousNode;
					}
					else {
						if (!nextNode.previousNode && nextNode.nextNode) {
							this.head = nextNode.nextNode;
							this.head.previousNode = null;
						}
						else if (!nextNode.nextNode && nextNode.previousNode) {
							this.tail = nextNode.previousNode;
							this.tail.nextNode = null;
						}
						else {
							this.head = null;
							this.tail = null;
						}
					}
					break;
				}
				nextNode = nextNode.nextNode;
			}
		}
	}

	count() {
		if (!this.head) return 0;
		else {
			let count = 1;
			let nextNode = this.head.nextNode;
			while (nextNode) {
				count++;
				nextNode = nextNode.nextNode;
			}
			return count;
		}
	}
}

module.exports = LinkedList;