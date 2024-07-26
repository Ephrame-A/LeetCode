/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let n = nums.length;
    if(n===0)
    return -1;
    let pI = new Array(n);
    pI[0] = nums[0];
    for(let i=1; i<n; i++){
    pI[i] = pI[i-1] + nums[i];
    }
    for(let i=0; i<n; i++){
       let left = (i===0) ? 0 : pI[i-1];
let right = (i === n-1) ? 0 : pI[n-1] - pI[i];
if(left === right)
return i;
    }
    return -1;
};