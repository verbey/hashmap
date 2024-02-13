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

		if (this.length / this.buckets.length > 0.75) {
			for (let i = this.buckets.length; i < this.buckets.length * 2; i++) {
				this.buckets[i] = new LinkedList();
			}
		}
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

	remove(key) {
		const index = this.hash(key) % this.buckets.length;
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		let nextNode = this.buckets[index].head;
		if (nextNode) {
			while (nextNode !== null) {
				if (nextNode.element.key === key) {
					this.buckets[index].delete(nextNode.element);
					return true;
				}
			}
			return false;
		}
	}

	length() {
		let length = 0;
		this.buckets.forEach((bucket) => {
			length += bucket.count();
		});
		return length;
	}

	clear() {
		this.buckets = [];
		for (let i = 0; i < 16; i++) {
			this.buckets[i] = new LinkedList();
		}
	}

	keys() {
		let keys = [];
		this.buckets.forEach((bucket) => {
			let nextNode = bucket.head;
			if (nextNode) {
				while (nextNode !== null) {
					keys.push(nextNode.element.key);
					nextNode = nextNode.nextNode;
				}
			}

		});
		return keys;
	}

	values() {
		let values = [];
		this.buckets.forEach((bucket) => {
			let nextNode = bucket.head;
			if (nextNode) {
				while (nextNode !== null) {
					values.push(nextNode.element.value);
					nextNode = nextNode.nextNode;
				}
			}

		});
		return values;
	}

	entries() {
		let entries = [];
		this.buckets.forEach((bucket) => {
			let nextNode = bucket.head;
			if (nextNode) {
				while (nextNode !== null) {
					entries.push([nextNode.element.key, nextNode.element.value]);
					nextNode = nextNode.nextNode;
				}
			}

		});
		return entries;
	}
};

module.exports = HashMap;;