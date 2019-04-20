"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var MobileOperator_1 = require("./MobileOperator");
var person1 = new Person_1.Person(1, "John", 100);
var person2 = new Person_1.Person(2, "Tom", 200);
var person3 = new Person_1.Person(3, "Bobby", 300);
var person4 = new Person_1.Person(4, "Thomas", 400);
var person5 = new Person_1.Person(5, "Rose", 500);
var persons = [person1, person2, person3, person4, person5];
var mo1 = new MobileOperator_1.MobileOperator(100, "Vodafone", 4.0);
var mo2 = new MobileOperator_1.MobileOperator(200, "Jio", 4.5);
var mo3 = new MobileOperator_1.MobileOperator(300, "BSNL", 4.8);
var mo4 = new MobileOperator_1.MobileOperator(400, "Idea", 4.9);
var mo5 = new MobileOperator_1.MobileOperator(500, "Airtel", 3.5);
var operators = [mo1, mo2, mo3, mo4, mo5];
///////////////////////
var mobileOp = "Jio";
var returned = false;
var id = search(mobileOp);
if (!returned) {
    throw new InvalidMobileOperatorException();
}
console.log("Person using " + mobileOp);
printUser(id);
console.log("---------------------");
var rate1 = function () {
    var max = operators[0].getRating();
    var id;
    var index = 0;
    var count = 0;
    operators.forEach(function (el) {
        if (max < el.getRating()) {
            max = el.getRating();
            id = el.getOperatorId();
            index = count;
        }
        count++;
    });
    console.log("Person using 1st Highest Rating Operator");
    count = 0;
    persons.forEach(function (item) {
        if (id == item.getmobileOperator()) {
            console.log(item.getPersonId() + " " + item.getName());
        }
    });
    var max2 = operators[0].getRating();
    var id2;
    for (var i = 1; i < operators.length; i++) {
        if (max2 < operators[i].getRating()) {
            if (i != index) {
                max2 = operators[i].getRating();
                id2 = operators[i].getOperatorId();
            }
        }
    }
    console.log("Person using 2nd Highest Rating Operator");
    persons.forEach(function (item) {
        if (id2 == item.getmobileOperator()) {
            console.log(item.getPersonId() + " " + item.getName());
        }
    });
};
rate1();
function printUser(id) {
    persons.forEach(function (item) {
        if (id == item.getmobileOperator()) {
            console.log(item.getPersonId() + " " + item.getName());
        }
    });
}
function search(mobileOp) {
    operators.forEach(function (elment) {
        if (elment.getOperatorName() == mobileOp) {
            returned = true;
            return elment.getOperatorId();
        }
    });
    //throw new InvalidMobileOperatorException();
}
function InvalidMobileOperatorException() {
    console.log("Operator with this name does not exits");
}
