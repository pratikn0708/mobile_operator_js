class MobileOperator{
    private operatorId:number;
    private opeartorName:string;
    private rating:number;
    constructor(operatorId:number,operatorName:string,rating:number){
        this.operatorId=operatorId;
        this.opeartorName=operatorName;
        this.rating=rating;
    }

    public getOperatorId(){
        return this.operatorId;
    }

    public getOperatorName(){
        return this.opeartorName;
    }
    public getRating(){
        return this.rating;
    }
    
}
export {MobileOperator}; 