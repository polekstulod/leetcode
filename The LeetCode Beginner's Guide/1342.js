/* 
* Number of Steps to Reduce a Number to Zero
% Runtime: 94 ms
? Memory: 42.4 MB 
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0
  while (num > 0) {
    num % 2 === 0 ? (num = num / 2) : num--
    count++
  }
  return count
}
