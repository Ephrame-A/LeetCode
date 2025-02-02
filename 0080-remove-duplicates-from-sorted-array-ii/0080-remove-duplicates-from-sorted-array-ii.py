class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l=0
        r=2
        while r<len(nums):
            if nums[l]==nums[r]:
                del nums[l]
            else:
                l+=1
                r+=1
            