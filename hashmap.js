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
		this.buckets[index].push(value);
	}
};