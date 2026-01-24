class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(newFirstName) {
    this._firstName = this.capitalizeFirst(newFirstName);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(newLastName) {
    this._lastName = this.capitalizeFirst(newLastName);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const person1 = new Person("john", "doe");
console.log(person1);
person1.firstName = "joe";
person1.lastName = "doe";
console.log(person1);
console.log(person1.fullName);
