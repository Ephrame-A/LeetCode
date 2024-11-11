class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        num = [i for i in nums if -1*i in nums] or [-1]
        return max(num)