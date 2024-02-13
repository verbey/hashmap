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
		const index = this.hash(key);
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		if (this.buckets[index].count === 0) this.buckets[index].push({ key: key, value: value });
		else {
			let nextNode = this.buckets[index].head;
			while (nextNode !== null) {
				if (nextNode.value.key === key) {
					nextNode.value.value = value;
					return;
				}
				nextNode = nextNode.nextNode;
			}
			this.buckets[index].push({ key: key, value: value });
		}
	}

	get(key) {
		const index = this.hash(key);
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bound");
		}
		let nextNode = this.buckets[index].head;
		while (nextNode !== null) {
			if (nextNode.value.key === key) return nextNode.value.value;
			nextNode = nextNode.nextNode;
		}
		return null;
	}
};