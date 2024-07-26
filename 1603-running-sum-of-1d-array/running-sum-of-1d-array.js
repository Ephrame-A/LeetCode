/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let rsum = new Array(nums.length);//declare a new running sum array
    rsum[0] = nums[0];
for(let i=1; i<nums.length; i++)//loop  through 'nums' array starting from 1
rsum[i] = rsum[i-1] + nums[i]; //assign the sum of elments
return rsum;
};