// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  let rgbArr = [r, g, b];
  let hexArr = [];
  for (let i = 0; i < rgbArr.length; i++) {
    if (rgbArr[i] > 255) {
      hexArr.push("ff");
      continue;
    }
    if (rgbArr[i] < 0) {
      hexArr.push("00");
      continue;
    }
    let hex = Number(rgbArr[i]).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    hexArr.push(hex);
  }
  return hexArr.join("").toUpperCase();
}
const result = rgb(240, 25, 355);
console.log(result);
