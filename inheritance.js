class Parent{
    constructor(){
        this.fatherName="Schwenrznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getfullName(){
        return this.name+" "+this.fatherName;
    }
}

const baby=new Child("Kiren");
const baby2=new Child("Danny");
console.log(baby.getfullName());
console.log(baby2.getfullName());