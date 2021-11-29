let kalimat = "saya suka coding";

function stringToArray(sentence) {
  let arr = [];
  let temp = [];

  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      temp.push(sentence[i]);
    } else {
      arr.push(temp);
      temp = [];
    }
  }

  // Adds the last word array
  arr.push(temp)

  return arr;
}

console.log(stringToArray(kalimat));