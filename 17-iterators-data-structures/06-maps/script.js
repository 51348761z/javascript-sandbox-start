const myMap = new Map();

myMap.set("name", "John");
myMap.set(1, "blue");
myMap.set(2, "red");

console.log(myMap.get(1));
console.log(myMap.get("name"));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(5));

myMap.delete(2);
console.log(myMap);

const peopleMap = new Map();
peopleMap.set("Tom", {
  phone: "123-456-7890",
  email: "tom@example.com",
});
peopleMap.set("Jane", {
  phone: "987-654-3210",
  email: "jane@example.com",
});
peopleMap.set("Bob", {
  phone: "555-555-5555",
  email: "bob@example.com",
});

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
