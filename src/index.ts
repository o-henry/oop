interface Obj<T> {
  [key: string]: T;
}

function createNewPerson(name: string) {
  let obj: Obj<any> = {};
  obj.name = name;
  obj.greeting = function () {
    console.log(`Hi! I'm '${this.name}'.`);
  };
  return obj;
}

let henry = createNewPerson("Henry");

henry.greeting();

/ <-----------------refactoring-----------------> /;

class Person {
  constructor(private name: string) {}

  public greeting() {
    console.log(`Hi! I'm '${this.name}'.`);
  }
}

let personA = new Person("Bob");
personA.greeting();
