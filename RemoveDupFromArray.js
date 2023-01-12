// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Remove Duplicates from Sorted Array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// var removeDuplicates = function(nums) {
//     return nums.reduce((value, item, index)=>{
//         if (nums[index + 1] != item) nums[value++] = item;
//         return value;
//     }, 0);
// };
// console.log(removeDuplicates(nums));
// removeDuplicates(nums)
// console.log(nums);


// let prices = [1, 7, 2, -1, 6, 7, 6, 7]
// var maxProfit = function (prices) {
//     return calculate(prices, 0);
// }

// var calculate = function (prices, s) {
//     if (s >= prices.length)
//         return 0;
//     let max = 0;
//     for (let start = s; start < prices.length; start++) {
//         let maxprofit = 0;
//         for (let i = start + 1; i < prices.length; i++) {
//             if (prices[start] < prices[i]) {
//                 let profit = calculate(prices, i + 1) + prices[i] - prices[start];
//                 if (profit > maxprofit)
//                     maxprofit = profit;
//             }
//         }
//         if (maxprofit > max)
//             max = maxprofit;
//     }
//     return max;
// }

// console.log(maxProfit(prices))