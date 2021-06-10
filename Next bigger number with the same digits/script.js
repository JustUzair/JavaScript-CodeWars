// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// function nextBigger(n) {
//   let nextBigNum = -1;
//   let a = n.toString().split("");
//   for (let i = a.length - 1; i >= 0; --i) {
//     if (a[i] < a[i + 1]) {
//       let pivot = a.splice(i + 1).sort();
//       for (let j = 0; j < pivot.length; ++j) {
//         if (pivot[j] > a[i]) {
//           a[i] = pivot[j] - a[i];
//           pivot[j] = pivot[j] - a[i];
//           a[i] = pivot[j] + a[i];
//           nextBigNum = parseInt(a.concat(pivot).join(""), 10);
//           i = 0;
//           break;
//         }
//       }
//     }
//   }
//   return nextBigNum;
// }
function maxWithDigits(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}
function nextBigger(n) {
  let mx = maxWithDigits(n);
  //   console.log(mx);
  let i = n + 1;
  //   console.log(i);
  for (i; i <= mx; i++) {
    console.log(maxWithDigits(i));
    if (maxWithDigits(i) === mx) {
      console.log(i, i + 1);
      return i;
    }
  }
  return -1;
}
const result = nextBigger(112);
// console.log(result);
