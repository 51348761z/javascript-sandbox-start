const sym = Symbol();
const sym1 = Symbol("foo");
const sym2 = Symbol("bar");

console.log(sym, sym1, sym2);

console.log(typeof sym);

console.log(sym.description);
console.log(sym1.description);

console.log(Symbol("sym") === Symbol("sym"));

// Symbols are unique
const user = {
  [Symbol("id")]: 1,
  name: "John Doe",
  email: "john@gmail.com",
};

user.id = 2;

console.log(user);
console.log(user["name"]);
console.log(user[Symbol("id")]);

// Symbols are NOT iterable
console.log(Object.keys(user));
console.log(Object.entries(user));

console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()
const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");

console.log(sym3 === sym4);

console.log(sym1.toString());
console.log(sym2.toString());
console.log(sym.toString());

console.log(sym1.valueOf());
console.log(sym2.valueOf());
console.log(sym.valueOf());
