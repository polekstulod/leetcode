/*
* Richest Customer Wealth
% Runtime: 74 ms
? Memory: 42.2 MB 
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0
  for (const acc of accounts) {
    const sum = acc.reduce((acc, curr) => acc + curr, 0)
    max = Math.max(max, sum)
  }
  return max
}
