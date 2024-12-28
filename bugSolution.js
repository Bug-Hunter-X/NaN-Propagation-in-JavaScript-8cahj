function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; //Explicitly return NaN
  }
  return a + b;
}

function bar(a, b) {
  if (isNaN(a) || isNaN(b)){
    return NaN; //Explicitly return NaN
  }
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(NaN, 3)); // Output: NaN
console.log(bar(2, NaN)); //Output: NaN