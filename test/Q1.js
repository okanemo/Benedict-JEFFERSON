let word = "katak";

function sama(word) {
  let reverse = '';

  for (let i = 0; i < word.length; i++) {
    reverse += word[word.length - 1 - i];
  }

  if (reverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(sama(word))