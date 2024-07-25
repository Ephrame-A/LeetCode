/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    if (nums.length === 0) return -1; // Handle empty array

    let psum = new Array(nums.length);
    psum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        psum[i] = psum[i - 1] + nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        // Calculate right sum as total sum minus left sum minus current element
        let leftSum = i > 0 ? psum[i - 1] : 0;
        let rightSum = psum[nums.length - 1] - psum[i];
        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1; // Return -1 if no index found
};
