const obj = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };

const sum = (value1, value2) => value1 + value2; 

console.log(Object.values(obj.food).reduce(sum));