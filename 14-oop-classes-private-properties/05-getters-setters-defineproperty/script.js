// Constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (newFirstName) {
      this._firstName = this.capitalizeFirst(newFirstName);
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (newLastName) {
      this._lastName = this.capitalizeFirst(newLastName);
    },
  });

  Object.defineProperty(this, "fullName", {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  });
}

Person.prototype.capitalizeFirst = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const person1 = new Person("john", "doe");
console.log(person1);

console.log(person1.firstName);
console.log(person1.lastName);

console.log(person1.fullName);

// Object Literal
const PersonObj = {
  _firstName: "jane",
  _lastName: "doe",

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  },
  set firstName(newFirstName) {
    this._firstName = this.capitalizeFirst(newFirstName);
  },

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  },
  set lastName(newLastName) {
    this._lastName = this.capitalizeFirst(newLastName);
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  capitalizeFirst: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};

console.log(PersonObj.firstName);
PersonObj.firstName = "john";
console.log(PersonObj.fullName);
