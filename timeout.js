//synchronous or sequential way ans asynchronous way;
function doSomething() {
  console.log("** i am coding");
}
console.log("1. I am 1st");
console.log("2. I am 2nd");
// doSomething();
// setTimeout(doSomething);
// setTimeout also takes anonymous as well as arrow function and a milisecond parameter;
setTimeout(() => {
  console.log("i am upper Level boss");
}, 4010);
// who has lower timeout will be exucuted first;
setTimeout(() => {
  console.log("i am lower level thug");
}, 4000);
console.log("3. I am 3rd");
console.log("4. I am 4th");
