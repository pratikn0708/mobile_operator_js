"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(personId, name, mobileOperator) {
        this.name = name;
        this.personId = personId;
        this.mobileOperator = mobileOperator;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getPersonId = function () {
        return this.personId;
    };
    Person.prototype.getmobileOperator = function () {
        return this.mobileOperator;
    };
    return Person;
}());
exports.Person = Person;
