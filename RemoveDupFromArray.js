// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Remove Duplicates from Sorted Array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    // var count = 0;
    // nums.map((item, index)=>{
    //     if (nums[index + 1] != item) nums[count++] = nums[index];
    // })
    // return count; 
    return nums.reduce((value, item, index)=>{
        if (nums[index + 1] != item) nums[value++] = item;
        return value;
    }, 0);
};
console.log(removeDuplicates(nums));
console.log(nums);
