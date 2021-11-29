const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input a word: ', (answer) => {
  console.log(sama(answer));
  rl.close();
});

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