const sum = (a,c) => (function (a,c) {
  if (c !== undefined) {
    return a + c;
  }
  return function (b) {
    return a + b;
  }
})(a,c);

console.log(sum(2)(3))