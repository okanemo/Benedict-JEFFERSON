let numbers = [3, 2, 1, 2, 1, 4, 6, 5, 7, 8, 8, 9, 2]

function filterNumber(arr) {
  let unique = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(!unique.includes(arr[i]) && !(arr[i] > 5 && arr[i] < 9)) {
      unique.push(arr[i]);
    }
  }

  return unique.sort();
}

console.log(filterNumber(numbers))