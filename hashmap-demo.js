const HashMap = require("./hashmap.js");

const hashMapInstance = new HashMap();

console.log("hash method demo:");
console.log(`abc -> ${hashMapInstance.hash("abc")}`);

console.log("set and get methods demo:");
console.log(`set("abc", "def") -> ${hashMapInstance.set("abc", "def")}`);
console.log(`get("abc") -> ${hashMapInstance.get("abc")}`);
console.log(`set("aad", "undef") -> ${hashMapInstance.set("aad", "undef")}`);
console.log(`get("aad") -> ${hashMapInstance.get("aad")}`);

console.log("has method demo:");
console.log(`has("abc") -> ${hashMapInstance.has("abc")}`);
console.log(`has("aaa") -> ${hashMapInstance.has("aaa")}`);

console.log("remove method demo:");
console.log(`remove("abc") -> ${hashMapInstance.remove("abc")}`);
console.log(`has("abc") -> ${hashMapInstance.has("abc")}`);

console.log("length method demo:");
console.log(`length() -> ${hashMapInstance.length()}`);

console.log("clear method demo:");
console.log(`clear() -> ${hashMapInstance.clear()}`);

console.log("keys method demo:");
hashMapInstance.set("key1", "value1");
hashMapInstance.set("key2", "value2");
hashMapInstance.set("key3", "value3");
console.log(`keys() -> ${hashMapInstance.keys()}`);

console.log("values method demo:");
hashMapInstance.set("key1", "value1");
hashMapInstance.set("key2", "value2");
hashMapInstance.set("key3", "value3");
console.log(`values() -> ${hashMapInstance.values()}`);

console.log("entries method demo:");
console.log(`entries() -> ${hashMapInstance.entries()}`);
