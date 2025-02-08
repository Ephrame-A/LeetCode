class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        x = defaultdict(list)
        for i in range(0, len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            r=len(nums)-1
            l=i+1
            while l<r:
                s=nums[l]+nums[r]+nums[i]
                if(s==0):
                    x[0].append([nums[i],nums[l],nums[r]])
                    l+=1
                    r-=1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    
                    # Avoid duplicates for the third number
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif nums[l]+nums[r]+nums[i]<0:
                    l+=1
                else:
                    r-=1
        return x[0]