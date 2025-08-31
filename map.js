
const list=[23,43,84,96];
// const list2=[];
// for( const item  of list){
//     list2.unshift(item*2);
    
// }
// const list2=num=>num*2;
// const finalList=list.map(list2);
// console.log(finalList);

const list2=list.map(num=>num*3);
console.log(list2);

const square=()=>list.map(num=>num*num);
console.log(square());

const nameList=["Akash","Batasha","Chosa","Dosa"];
const length=nameList.map(x=>x.length);
console.log(length);

const length2=list.map((item,index)=>
    {
        result=item*index
          return result;
    });
console.log(length2);

list.map(item=>{
    const result=item*3;
      console.log(result);
});
