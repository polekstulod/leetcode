/* 
* Fizz Buzz
% Runtime: 73 ms
? Memory: 44.3 MB 
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz')
    else if (i % 3 === 0) arr.push('Fizz')
    else if (i % 5 === 0) arr.push('Buzz')
    else arr.push(`${i}`)
  }

  return arr
}
