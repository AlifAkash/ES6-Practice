const age = [12,14,16,18,19];
const age2= [15,13,17];
const age3=[24,25,36,22];
const allages=age.concat(age2).concat([5]).concat(age3);

console.log(allages);

const allages2=[...age,...age2,5,...age3];      //ES6 model

console.log(allages2);

const businessMan=650;
const minister=450;
const sochib=550;
const takaPoisha=[450,550,650,850];

const maximum=Math.max(businessMan,minister,sochib);
console.log(maximum);

const maximum2=Math.max(...takaPoisha);
console.log(maximum2);