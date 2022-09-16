"use strict";
class Person {
    get courses() {
        return this._courses;
    }

    set courses(a_list) {
        this._courses = a_list;
    }
}

/**
 * 1. do not use setter
 * 2. 컬렉션에 대해서는 불필요한 복제본을 만드는 편이 더 낫다.
 */

class _Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {
        return this._name;
    }
    get courses() {
        return this._courses.slice();
    }

    add_course(a_course) {
        this._courses.push(a_course);
    }
    remove_course(a_course) {}
}
