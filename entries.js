const market={Vagetable:"potato",price:60, quantity:1}

const key=Object .keys(market);
console.log(key);
const value=Object.values(market);
console.log(value);
const all=Object.entries(market);
console.log(all);
// Object.freeze(market);
Object.seal(market);
const price=market.price;
 market.type="Deshi"
 market.price=price+10
delete market.quantity;
console.log(market);