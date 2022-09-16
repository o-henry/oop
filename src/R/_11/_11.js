"use strict";
class Employee {
    #_name;
    #_type_code;

    get name() {
        return this._name;
    }
    get type() {
        return Employee.legal_type_codes[this._type_code];
    }

    static create_employee({ args: { name, type_code } }) {
        return new Employee(name, type_code);
    }

    static get legal_type_codes() {
        return { E: "Engineer", M: "Manager", S: "Salesperson" };
    }
}

const candidate = new Employee({
    name: document.name,
    type_code: document.empType,
});

const _candidate = Employee.create_employee(document.name, document.empType);

export {};
