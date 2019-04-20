export { }
import Person  from "./Person";
import { MobileOperator } from "./MobileOperator";


let person1 = new Person(1, "John", 100);
let person2 = new Person(2, "Tom", 200);
let person3 = new Person(3, "Bobby", 300);
let person4 = new Person(4, "Thomas", 400);
let person5 = new Person(5, "Rose", 500);
let persons: Person[] = [person1, person2, person3, person4, person5];


let mo1 = new MobileOperator(100, "Vodafone", 4.0);
let mo2 = new MobileOperator(200, "Jio", 4.5);
let mo3 = new MobileOperator(300, "BSNL", 4.8);
let mo4 = new MobileOperator(400, "Idea", 4.9);
let mo5 = new MobileOperator(500, "Airtel", 3.5);
let operators: MobileOperator[] = [mo1, mo2, mo3, mo4, mo5];


///////////////////////
let mobileOp = "Jio";
let returned:boolean=false;
let id = search(mobileOp);

if(!returned){
    throw new InvalidMobileOperatorException();
}


console.log("Person using " + mobileOp);
printUser(id);

console.log("---------------------");


let rate1 = () => {
    let max: number = operators[0].getRating();
    let id: number;
    let index: Number = 0;
    let count = 0;
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

    let max2: number = operators[0].getRating();
    let id2: number;
    for (let i = 1; i < operators.length; i++) {
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
}

rate1();

function printUser(id) {
    persons.forEach(function(item){
        if (id == item.getmobileOperator()) {
            console.log(item.getPersonId() + " " + item.getName());
        }
    });
}
function search(mobileOp) {
    operators.forEach(function(elment){
        if (elment.getOperatorName() == mobileOp) {
            returned=true;
            return elment.getOperatorId();
        }
        
    });
    //throw new InvalidMobileOperatorException();
}


function InvalidMobileOperatorException() {
    console.log("Operator with this name does not exits");
}