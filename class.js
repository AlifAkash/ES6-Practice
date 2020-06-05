class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="Advance School";
    }
}

const student1= new student(23,"Eva");
const student2= new student(31,"nina");
const student3= new student(33,"Ava");
console.log(student1.name,student2.name,student3);