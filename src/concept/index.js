function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        console.log("Hi! I'm '" + this.name + "'.");
    };
    return obj;
}
var henry = createNewPerson("Henry");
henry.greeting();
/ <-----------------refactoring-----------------> /;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greeting = function () {
        console.log("Hi! I'm '" + this.name + "'.");
    };
    return Person;
}());
var personA = new Person("Bob");
personA.greeting();
