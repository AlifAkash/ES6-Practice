// function doubbleIt(num){
//     return num*2;
// }

// const doubbleIt=function(num){
//     return num*2;
// }

const doubbleIt= num => num*2;

const result0=doubbleIt(5);
console.log(result0);

const add= (x,y)=> x+y;

const result1=add(5,7);
console.log(result1);

const doMath=(x,y) => {
    const sum=x+y;
    const diff=x-y;
    const result= sum*diff;

    return result;
}

const result2= doMath(7,5);
console.log(result2);
