/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let add = 0;
    return nums.map(num => add += num)
};