
const collection=[12,23,34,54,65,76];
// console.log(...collection);

// const maximum=Math.max(20,92,400,892,1000,128);
const maximum=Math.max(...collection)
console.log(maximum);

const first=[23,45,76,83,33];
const second=[...first];
second.unshift(11);
console.log(second);

const numbers=(a,b,...c)=>console.log(a,b,...c);
numbers(13,25,18,90,23);

const arr1=[23,57,73,30];
const arr2=[40,86,57,14];
console.log(...arr1,...arr2);