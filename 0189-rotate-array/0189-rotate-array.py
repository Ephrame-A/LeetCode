class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if k>len(nums):
            k=k%len(nums)
        i=len(nums)-k
        l=nums[:i]
        r=nums[i:]
        nums[:k]=r
        nums[k:]=l