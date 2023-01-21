/* 
* Running Sum of 1d Array
% Runtime: 81 ms
? Memory: 47.6 MB 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce(
    (acc, curr, i) => (i === 0 ? [curr] : acc.concat([acc[acc.length - 1] + curr])),
    []
  )
}
