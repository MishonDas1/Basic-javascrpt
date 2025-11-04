var number = [10,20,30,40,50];
number.push(60);
console.log(number);
number.pop(60);
console.log(number);
console.log(number.length);

number.shift(10);
console.log(number);
number.unshift(10);
console.log(number);

console.log(number.slice(1,3));