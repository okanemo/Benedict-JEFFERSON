let maxSelfNumber = 200;

function findSelfNumbers(max) {
  let selfNumbers = [];
  let isSelfNumber = true;
  let reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);
  
  for(let i = 1; i < max; i++) {
    for(let j = i - 1; j >= 1; j--) {
      // calculates sum of number smaller than i and its individual number
      let sum = parseInt(j.toString().split('').reduce(reducer)) + j;

      // stop checking if non self number is found
      if(i === sum) {
        isSelfNumber = false;
        break;
      }
    }

    if(isSelfNumber === true) {
      selfNumbers.push(i);
    } else {
      isSelfNumber = true;
    }
  }

  return selfNumbers
}

console.log(findSelfNumbers(maxSelfNumber));


// console.log('123'.split('').reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue)))