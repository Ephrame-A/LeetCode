/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0, n = nums.length; 
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[count++] = nums[i];  
        }
    }
    while (count < n) {
        nums[count++] = 0;
    }

    console.log(nums);
};
