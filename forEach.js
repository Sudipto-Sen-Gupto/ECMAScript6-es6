//forEach
const marks=[80,78,67,92];
marks.forEach(x=> console.log(x*2));

//filter
const age=[23,25,32,33,43];
const more=age.filter(x=> x>32);
console.log(more);
 
const number=[  23,32,18,33,78,32,29,77];
const even=number.filter(item=>item%2 !==0)
console.log(even);

//find

const avgResult=[55,65,78,90,33,82,76];
const aboveSeventy=avgResult.find(item=>item>70);
console.log(aboveSeventy);

const obj=[
    {name:"kuddus",age:20,marks:629},
    {name:"kalia",age:20,marks:588},
    {name:"kafi",age:20,marks:532},
    {name:"kalam",age:20,marks:650}
]
const result=obj.filter(item=>item.marks>600);
console.log(result);

//reduce

const products=[
    {device:"mobile",price:20000},
    {
        device:"computer",price:100000
    },{device:"tab",price:65000}
]

const allPrice=products.reduce((sum,item)=>sum+item.price,0)
console.log(allPrice);