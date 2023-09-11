class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


static fromObject(obj) {
  return new Person(obj.firstName, obj.lastName);
}
}

const obj = {
  firstName: "Francesco",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
