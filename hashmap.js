const LinkedList = require("./linkedlist.js");

class HashMap {
	constructor() {
		this.buckets = [];
		for (let i = 0; i < 16; i++) {
			this.buckets[i] = new LinkedList();
		}
	}
	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	set(key, value) {
		const index = this.hash(key) % this.buckets.length;
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		this.buckets[index].push({ key: key, value: value });
	}

	get(key) {
		const index = this.hash(key) % this.buckets.length;
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		let nextNode = this.buckets[index].head;
		if (nextNode) {
			while (nextNode !== null) {
				if (nextNode.element.key === key) return nextNode.element.value;
				nextNode = nextNode.nextNode;
			}
		}
		return null;
	}

	has(key) {
		const index = this.hash(key) % this.buckets.length;
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		let nextNode = this.buckets[index].head;
		if (nextNode) {
			while (nextNode !== null) {
				if (nextNode.element.key === key) return true;
				nextNode = nextNode.nextNode;
			}
		}
		return false;
	}
};

module.exports = HashMap;;