// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
  let temp = str.split(" ");
  return temp
    .map(word => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word;
    })
    .join(" ");
  //   for (let i = 0; i < temp.length; i++) {
  //     // temp[i] = temp[i].slice(1) + temp[i].charAt(0) + "ay ";
  //     temp[i] = ``;
  //   }
  //   return temp;
}
console.log(pigIt("Hello World"));
