"use strict";
const organization = { name: "Acme Gooseberries", country: "GB" }; // record

result += `<h1>${organization.name}</h1>`;
organization.name = "Henry";

/** encapsulation */
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() {
        return this._name;
    }
    set name(arg) {
        this._name = arg;
    }
    get country() {
        return this._country;
    }
    set country(arg) {
        this._country = arg;
    }
}
