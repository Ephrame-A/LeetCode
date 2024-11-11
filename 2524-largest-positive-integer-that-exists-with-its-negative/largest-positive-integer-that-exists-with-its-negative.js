/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b)=>a-b);
    for(let i=nums.length-1; i>=0; i--){
        if(nums.includes(-1*nums[i])){
            return nums[i];
        }
    }
    return -1;
};