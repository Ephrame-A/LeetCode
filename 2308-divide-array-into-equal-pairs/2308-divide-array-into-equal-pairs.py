class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        obj=Counter(nums)
        for key, value in obj.items():
            if value%2!=0:
                return False
        return True
        