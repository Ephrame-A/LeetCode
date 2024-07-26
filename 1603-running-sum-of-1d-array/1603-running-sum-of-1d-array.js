/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let rsum = new Array(nums.length);
    rsum[0] = nums[0];
for(let i=1; i<nums.length; i++)
rsum[i] = rsum[i-1] + nums[i];
return rsum;
};