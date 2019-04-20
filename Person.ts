class Person{
    private personId:number;
    private name:string;
    private mobileOperator:number;
    constructor(personId:number,name:string,mobileOperator:number){
        this.name=name;
        this.personId=personId;
        this.mobileOperator=mobileOperator;
    }

    public getName(){
        return this.name;
    }

    public getPersonId(){
        return this.personId;
    }
    public getmobileOperator(){
        return this.mobileOperator;
    }
}
export default Person;