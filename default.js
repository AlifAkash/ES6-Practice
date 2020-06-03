function add(num1,num2){
    return num1+num2;
}

const total=add(10,13);
console.log(total);

function added(num1,num2=0){
    return num1+num2;
}

const total1=added(10);
console.log(total1);

function added_1(num1,num2){
    if(num2==undefined){
        num2=0;
    }
    return num1+num2;
}

const total2=added_1(15);
console.log(total2);

function added_2(num1,num2){
    num2=num2||0;
    return num1+num2;
}

const total3=added_2(17,3);
console.log(total3);