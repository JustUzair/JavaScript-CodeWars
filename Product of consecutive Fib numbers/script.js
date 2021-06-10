// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
function productFib(prod) {
  let fib = [0, 1];
  let i;
  for (i = 2; ; i++) {
    if (fib[i - 1] * fib[i - 2] === prod) return [fib[i - 2], fib[i - 1], true];
    fib.push(fib[i - 1] + fib[i - 2]);
    if (fib[i - 1] * fib[i - 2] > prod) break;
  }
  return [fib[i - 2], fib[i - 1], false];
}
const result = productFib(84049690);
console.log(result);
