/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
     let count = 0;
   for(let i=0; i<nums.length; i++){
    if(nums[i]>nums[i+1])
count++;
   }
   if(count>1 || (count == 1 && nums[0]<nums[nums.length-1])) return false;
   else return true;
}; 